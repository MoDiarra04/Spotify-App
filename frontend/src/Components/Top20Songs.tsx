import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Grid, Container } from "@mui/material";

interface SongCardProps {
  songName: string;
  artistName: string;
  previewSongURL: string;
}

const SongCard = (props: SongCardProps) => {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", width: "390px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.songName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.artistName}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <Grid container justifyContent="flex-end">
      <CardMedia
        component="img"
        sx={{ width: "90%" }}
        image="https://upload.wikimedia.org/wikipedia/en/1/16/Justin_Bieber_-_Changes.png"
        alt="Live from space album cover"
      />
      </Grid>
    </Card>
  );
};

const songData: SongCardProps[] = [
  {
    songName: "Live From Space",
    artistName: "test",
    previewSongURL: "test",
  },
  {
    songName: "test",
    artistName: "Live From Space",
    previewSongURL: "test",
  },
  {
    songName: "test",
    artistName: "Live From Space",
    previewSongURL: "test",
  },
  {
    songName: "test",
    artistName: "Live From Space",
    previewSongURL: "test",
  },
  {
    songName: "test",
    artistName: "Live From Space",
    previewSongURL: "test",
  },
  {
    songName: "test",
    artistName: "test",
    previewSongURL: "test",
  },
  {
    songName: "test",
    artistName: "test",
    previewSongURL: "test",
  },
  {
    songName: "test",
    artistName: "test",
    previewSongURL: "test",
  },
  {
    songName: "test",
    artistName: "test",
    previewSongURL: "test",
  },
  {
    songName: "test",
    artistName: "test",
    previewSongURL: "test",
  }
];

const Top20Songs = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Typography gutterBottom variant="h3" component="div">
        Die 20 meistgestreamten Songs auf{" "}
        <Box sx={{ color: "#1DB954" }}>Spotify</Box>
      </Typography>
      <Grid sx={{ pt: 3 }} container direction={"row"} spacing={1}>
        {songData.map((data, id) => (
          <Grid item md={4}>
            <SongCard
              artistName={data.artistName}
              songName={data.songName}
              previewSongURL={data.previewSongURL}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Top20Songs;

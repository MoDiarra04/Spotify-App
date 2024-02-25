import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, Box } from "@mui/material";
import { Artist } from "../Utils/artist";
import { fetchTop50Artists } from "../Utils/fetch";

export const PopularAristComponent = () => {
  const navigate = useNavigate();

  const [artistData, setArtistData] = useState<Artist[]>([]);

  useEffect(() => {
    fetchTop50Artists().then((res) => {
      setArtistData(res);
    });
  }, []);

  const ArtistCard = (props: { artist: Artist; index: number }) => {
    return (
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          sx={{ height: 170 }}
          image="https://th.bing.com/th/id/R.7c83fcdc89fd46622ff839162395e4fd?rik=UAfaG2kBwfs%2blA&pid=ImgRaw&r=0"
          title="green iguana"
        />
        <CardContent>
          <Box
            sx={{
              display:"flex",
              justifyContent: "center",
              border: "1px solid #1DB954",
              borderRadius: "50%",
              backgroundColor: "#1DB954",
              color: "white",
              width: "30px",
            }}
          >
            {props.index + 1}
          </Box>
          <Typography variant="h5" component="div">
            {props.artist.name}
          </Typography>
          <Typography gutterBottom variant="body1" color="text.secondary">
            Monatliche Streams: {props.artist.monthlyStreams}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.artist.description}Das ist eine Beschreibung
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            onClick={() => navigate("/artist" + props.artist.id)}
            size="small"
          >
            Zum Künstler
          </Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <Container maxWidth="xl">
      <Typography gutterBottom variant="h3" component="div">
        Die 50 beliebtesten Künstler auf <Box sx={{ color: "#1DB954" }}>Spotify</Box>
      </Typography>
      <Grid sx={{ pt: 3 }} container direction={"row"} spacing={4}>
        {artistData.map((artist, index) => (
          <Grid item xs={4} md={3}>
            <ArtistCard artist={artist} index={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularAristComponent;

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const artistData: Artist[] = [
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
  { name: "Test", description: "test", monthlyStreams: 100000 },
];

interface Artist {
  name: string;
  description: string;
  monthlyStreams: number;
  id?: string;
}

export const PopularAristComponent = () => {
  const navigate = useNavigate();

  const ArtistCard = (props: { artist: Artist; index: number }) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 170 }}
          image="https://th.bing.com/th/id/R.7c83fcdc89fd46622ff839162395e4fd?rik=UAfaG2kBwfs%2blA&pid=ImgRaw&r=0"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.artist.name}
            {props.index + 1}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Popularität: {props.artist.monthlyStreams}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.artist.description}
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
        Die 100 beliebtesten Künstler auf Spotify
      </Typography>
      <Grid sx={{ pt: 5}}container direction={"row"} spacing={4}>
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

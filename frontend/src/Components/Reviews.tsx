import * as React from 'react';
import { Box } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActions,Button, } from '@mui/material';
import { Artist } from '../Utils/artist';
import { useNavigate } from "react-router-dom";

function Reviews(props: { artist: Artist }) {

  const navigate = useNavigate();

  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#121212",
          pt: 4,
          width: "100%",
        }}
        color="white"
      >
        <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          sx={{ height: 170 }}
          image="https://th.bing.com/th/id/R.7c83fcdc89fd46622ff839162395e4fd?rik=UAfaG2kBwfs%2blA&pid=ImgRaw&r=0"
          title="green iguana"
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              border: "1px solid #1DB954",
              borderRadius: "50%",
              backgroundColor: "#1DB954",
              color: "white",
              width: "30px",
            }}
          >
          </Box>
          <Typography variant="h5" component="div">
            {props.artist.name}
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
      </Box>
    </>
  )
}

export default Reviews

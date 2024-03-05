import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, IconButton } from "@mui/material";
import { Autocomplete, TextField, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import QuestionBox from "./QuestionBox";
import Reviews from "./Reviews";
import Steps from "./Steps";
import "../App.css";
import { fetchArtistMonthlyStreams, searchArtistByName } from "../Utils/fetch";
import Animation from "./Animation";

interface searchEntry {
  name: string;
  img: string;
  follower: string;
}

export default function MainPage() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  const [artistData, setArtistData] = useState<readonly searchEntry[]>([]);
  const [currentID, setCurrentID] = useState<string | null>(null);

  const onSubmit = () => {
    if (currentID) navigate("/artist/" + currentID);
  };

  const searchArtists = (text: string | null) => {
    if (!text) return;
    searchArtistByName(text).then((res: any) => {
      setCurrentID(res.data.artists.items[0].id);
      console.log(res);

      let newArtistData: searchEntry[] = [];
      for (let i = 0; i < 5; i++) {
        let artist = res.data.artists.items[i];
        newArtistData.push({
          name: artist?.name,
          img: artist?.images[0]?.url,
          follower: artist.followers.total,
        });
      }
      setArtistData(newArtistData);
    });
  };

  fetchArtistMonthlyStreams("06HL4z0CvFAxyc27GXpf02").then((res) => {
    console.log(res);
  })

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{ justifyContent: "center", pb: 20 }}
        component="main"
        maxWidth="md"
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Suche nach einen Künstler
        </Typography>

        <Typography variant="h3">
          <Autocomplete
            disablePortal
            fullWidth
            inputValue={inputValue}
            onInputChange={(event: any, newInputValue: any) => {
              searchArtists(newInputValue);
              setInputValue(newInputValue);
            }}
            id="combo-box-demo"
            autoHighlight
            options={artistData}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
                width="100%"
              >
                <img
                  loading="lazy"
                  width="40"
                  srcSet={option.img}
                  src={option.img}
                  alt=""
                />
                <Grid container justifyContent="flex-start">
                  <Typography sx={{ color: "grey" }}>{option.name}</Typography>
                </Grid>
                <Grid container justifyContent="flex-end">
                  <Typography sx={{ color: "grey" }}>
                    Follower: {option.follower}
                  </Typography>
                </Grid>
              </Box>
            )}
            renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Künstlername"
                />
            )}
          />
        </Typography>
        <IconButton edge="end" color="primary">
          <Button
            variant="contained"
            onClick={() => onSubmit()}
            disableElevation
          >
            Los gehts
          </Button>
        </IconButton>
        <Animation/>
      </Container>
      <Box sx={{ width: "100%", backgroundColor: "#141414" }}>
        <Steps />
      </Box>
      <Container component="main" sx={{ mt: 8, mb: 8 }} maxWidth="md">
        <QuestionBox />
      </Container>
      <Reviews />
    </Box>
  );
}

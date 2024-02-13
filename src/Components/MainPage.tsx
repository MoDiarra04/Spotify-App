import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, IconButton } from "@mui/material";
import { Autocomplete, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import QuestionBox from "./QuestionBox";
import Reviews from "./Reviews";
import Steps from "./Steps";
import "../App.css";

const artistDataExample = ["Taylor Swift", "Shawn Mendez", "Dua Lipa", "Eminem"]

export default function MainPage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string | null>(null);

  const fetchNewArtist = (search: string | null) => {
    if (!search)
      return;
    //TODO: implement this
  }

  const onSubmit = () => {
    console.log(search)
    if (search)
      navigate("/artist/" + search);
  };

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
            value={search || ""}
            onChange={(event: any, newValue: string | null) => {setSearch(newValue); fetchNewArtist(newValue);}}
            id="combo-box-demo"
            options={artistDataExample}
            renderInput={(params) => (
              <>
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Künstlername"
                />
                <IconButton edge="end" color="primary">
                  <Button
                    variant="contained"
                    onClick={() => onSubmit()}
                    disableElevation
                  >
                    Los gehts
                  </Button>
                </IconButton>
              </>
            )}
          />
        </Typography>
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

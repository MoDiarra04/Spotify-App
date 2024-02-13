import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, IconButton } from "@mui/material";
import "../App.css";
import QuestionBox from "./QuestionBox";
import Reviews from "./Reviews";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import Steps from "./Steps";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function MainPage() {
  const navigate = useNavigate();

  const [ description, setDescription ] = useState<string>("");

  // const onSubmit = () => {
  //   setLoading(true);
  //   generateResponse(
  //     "Schreibe mir eine Stellenanzeige für einen" + stellenbezeichnung
  //   ).then((res) => {
  //     setLoading(false);
  //     if (res === "Internal server error") {
  //       setResponse(res);
  //       return;
  //     } else {
  //       setResponse(res.content);
  //       console.log(res);
  //     }
  //   });
  // };

  const onSubmit = () => {
     if (description)
      navigate("/generate");
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
          <TextField
            sx={{ pt: 7 }}
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            placeholder="Künstlername"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" color="primary">
                    <Button
                      variant="contained"
                      onClick={() => onSubmit()}
                      disableElevation
                    >
                      Los gehts
                    </Button>
                  </IconButton>
                </InputAdornment>
              ),
            }}
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

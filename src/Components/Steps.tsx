import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import { useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { CircularProgress} from "@mui/material";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import { Stack } from "@mui/material";

interface CustomCircularProgressProps {
  value: number;
  text?: string;
}

const CircularProgressWithLabel = (props: CustomCircularProgressProps) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', color: "#1DB954" }}>
      <CircularProgress variant="determinate" value={props.value} color="inherit" size={60}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color={(props.value === 0) ? "grey" : "white"}
        >{props.text}</Typography>
      </Box>
    </Box>
  );
};

export const Steps = () => {
  const [openList, setOpenList] = useState<boolean[]>([false, false, false]);
  const [currentProgress, setCurrentProgress] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress >= 100) {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 1
        );
        setCurrentProgress((prev) => (prev === 3 ? 1 : prev + 1));
      } else {
        setProgress((prevProgress) => prevProgress + 5);
      }
    }, 120);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <>
      <Typography sx={{ m: 7, color: "white" }} variant="h4" component="h2">
        So funktionierts
      </Typography>
      <Box sx={{ textAlign: "left", pb: 7 }}>
        <Container maxWidth="xl">
          <Grid
            spacing={12}
            container
            direction={isMobile ? "column" : "row"}
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item xs={4}>
                <CircularProgressWithLabel
                  text="1"
                  value={currentProgress === 1 ? progress : 0}
                />
                <Stack spacing={3} direction="column">
                  <Typography color="white">Gib uns den Namen des Artists</Typography>
                  <Typography color="white">
                    Suche oben im Formular nach einen beliebigen Künstler auf Spotify
                  </Typography>
                </Stack>
            </Grid>
            <Grid item xs={4}>
                <CircularProgressWithLabel
                  text="2"
                  value={currentProgress === 2 ? progress : 0}
                />
                <Stack spacing={3} direction="column">
                  <Typography color="white">Wir machen alles</Typography>
                  <Typography color="white">
                    Danach suchen wir nach den Künstler und sammeln Daten
                  </Typography>
                </Stack>
            </Grid>
            <Grid item xs={4}>
                <CircularProgressWithLabel
                  text="3"
                  value={currentProgress === 3 ? progress : 0}
                />
                <Stack spacing={3} direction="column">
                  <Typography color="white">Finde das was du möchtest</Typography>
                  <Typography color="white">
                    Du kannst alle verfügbaren Daten über den Künstler einsehen. Wie viel er verdient. Wie viele Streams er hat. Wie viele Songs er veröffentlicht hat
                  </Typography>
                </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Steps;

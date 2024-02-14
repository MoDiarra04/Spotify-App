import { useParams } from "react-router-dom";
import { Typography, Container, Stack, Grid, Link } from "@mui/material";

export const ArtistComponent = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="xl">
      <Stack direction="column" spacing={5} useFlexGap>
        <Typography variant="h2" textAlign="left">
          {id}
        </Typography>
        <Grid
          sx={{ p: 2 }}
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={4}>
            <Typography>
              <strong>Tools</strong>
            </Typography>
            <Grid
              sx={{ pt: 4 }}
              container
              spacing={2}
              direction="column"
              justifyContent="center"
              alignItems="center"
              color="text.secondary"
            >
              <Grid item xs={2}>
              <Link color="inherit" underline="none" href="/Lebenslauf">
                  Künstler mit höchsten Einkommen
                </Link>
              </Grid>
              <Grid item xs={2}>
              <Link color="inherit" underline="none" href="/Arbeitzeugnis">
                  Top 100 Künstler
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography>
              <strong>Informationen</strong>
            </Typography>
            <Grid
              sx={{ pt: 4 }}
              container
              spacing={2}
              direction="column"
              justifyContent="center"
              alignItems="center"
              color="text.secondary"
            >
              <Grid item xs={2}>
              <Link color="inherit" underline="none" href="/preise">
                  Preise
                </Link>
              </Grid>
              <Grid item xs={2}>
              <Link color="inherit" underline="none" href="/reviews">
                  Reviews
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography>
              <strong>Support</strong>
            </Typography>
            <Grid
              sx={{ pt: 4 }}
              container
              spacing={2}
              direction="column"
              justifyContent="center"
              alignItems="center"
              color="text.secondary"
            >
              <Grid item xs={2}>
                <Link color="inherit" underline="none" href="/faq">
                  FAQ
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link color="inherit" underline="none" href="/kontakt">
                  Kontakt
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link color="inherit" underline="none" href="/agb">
                  AGB
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link color="inherit" underline="none" href="/impressum">
                  Impressum
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="body1">
           test
        </Typography>
      </Stack>
    </Container>
  );
};

export default ArtistComponent;

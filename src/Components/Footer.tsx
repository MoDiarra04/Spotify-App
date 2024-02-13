import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        PlatzhalterName.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 5,
      }}
      fontSize={17}
    >
      <Container maxWidth="md">
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
        <Typography variant="body1">Made with React</Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

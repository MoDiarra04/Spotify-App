import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";

export default function Impressum() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: "left",
      }}
    >
      <Container maxWidth="md">
        <Stack direction="column" spacing={5} useFlexGap>
          <Typography variant="h2" textAlign="center">Unser Impressum</Typography>
          <Typography variant="body1">Moritz Ternes <br/>Auf dem Posten 6<br/>53547 Roßbach</Typography>
          <Typography variant="h4">
            Alternative Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO und § 36
            VSBG:
          </Typography>
          <Typography variant="body1">
            Die Europäische Kommission stellt unter
            https://ec.europa.eu/consumers/odr eine Plattform zur
            Online-Streitbeilegung (OS) bereit. Zur Teilnahme an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            sind wir nicht verpflichtet und nicht bereit.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

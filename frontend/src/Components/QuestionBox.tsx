import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Divider } from "@mui/material";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";

export const QuestionBox = () => {
  const [openList, setOpenList] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const handleChange = (index: number) => {
    const newList = [false, false, false];
    newList[index] = !openList[index];
    setOpenList(newList);
  };

  return (
    <div>
      <Typography sx={{ mb: 5 }} variant="h4" component="h2">
        Alles über uns
      </Typography>
      <Box sx={{ textAlign: "left" }}>
        <Accordion
          disableGutters
          elevation={0}
          sx={{
            "&:before": {
              display: "none",
            },
          }}
          expanded={openList[0]}
          onChange={() => handleChange(0)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>bla bla bla</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion
          disableGutters
          elevation={0}
          sx={{
            "&:before": {
              display: "none",
            },
          }}
          expanded={openList[1]}
          onChange={() => handleChange(1)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion
          disableGutters
          elevation={0}
          sx={{
            "&:before": {
              display: "none",
            },
          }}
          expanded={openList[2]}
          onChange={() => handleChange(2)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Ist euer Service kostenlos?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Ja, unser Service ist kostenlos für die ersten 3 Anfragen pro
              Monat, damit sie unser Modell ausprobieren und testen können.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion
          disableGutters
          elevation={0}
          sx={{
            "&:before": {
              display: "none",
            },
          }}
          expanded={openList[3]}
          onChange={() => handleChange(3)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Typography sx={{ p: 2, color: "text.secondary" }}>
          Hast du noch offene Fragen? Dann lies unsere{" "}
          <Link color="inherit" href="https://AudioAtlas.com/">
            FAQ
          </Link>{" "}
        </Typography>
      </Box>
    </div>
  );
};

export default QuestionBox;

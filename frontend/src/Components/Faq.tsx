import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography, Container } from '@mui/material';
import { useState } from "react";
import { Divider } from "@mui/material";
import { Box } from "@mui/material";

function Faq() {
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
      <Typography gutterBottom variant="h3" component="div">
        Frequently asked Questions (FAQ)
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
            <Typography>
              Wie kann ich die Popularität eines Künstlers auf Spotify überprüfen?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Auf unserer Website können Sie sehen, wie viele Follower ein Künstler auf Spotify hat. Wir bieten auch Einblicke in die Top-Songs und Alben des Künstlers sowie Statistiken zum generierten Einkommen.
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
            <Typography>
              Wie aktualisiert ihr die Informationen zu den Künstlern?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Unsere Datenbank wird regelmäßig aktualisiert, um die aktuellen Informationen zu Follower-Zahlen, Top-Songs, Alben und Einkommen der Künstler auf Spotify bereitzustellen.
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
            <Typography>
              Kann ich die Daten für verschiedene Zeiträume anzeigen lassen?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Ja, auf unserer Website können Sie die Daten für verschiedene Zeiträume anzeigen lassen, um Trends und Entwicklungen im Laufe der Zeit zu verfolgen.
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
            <Typography>
              Gibt es Einschränkungen für den Zugriff auf diese Daten?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nein, die Daten sind für alle Benutzer frei zugänglich und können ohne Einschränkungen eingesehen werden.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider/>
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
            <Typography>
            Bietet ihr Einblicke in andere Streaming-Plattformen an?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
        Derzeit konzentrieren wir uns auf die Daten von Spotify. Möglicherweise werden wir in Zukunft auch Daten anderer Streaming-Plattformen hinzufügen.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider/>
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
            <Typography>
            Wie genau sind die Einkommensdaten?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
        Die Einkommensdaten basieren auf Schätzungen und können je nach verschiedenen Faktoren variieren. Sie dienen als grobe Richtlinie für das generierte Einkommen eines Künstlers auf Spotify.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider/>
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
            <Typography>
            Kann ich euch Feedback oder Vorschläge für Verbesserungen geben?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
        Ja, wir freuen uns über Feedback und Vorschläge für Verbesserungen. Kontaktieren Sie uns bitte über das entsprechende Formular auf unserer Website.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider/>
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
            <Typography>
            Bietet ihr Dienstleistungen für Künstler oder Labels an?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Derzeit bieten wir keine speziellen Dienstleistungen für Künstler oder Labels an, aber wir sind offen für Partnerschaften und Kooperationen. Bitte kontaktieren Sie uns, um weitere Informationen zu erhalten.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}

export default Faq

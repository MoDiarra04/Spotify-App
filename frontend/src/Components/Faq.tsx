import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';

function Faq() {
  return (
    <div>
      <Typography gutterBottom variant="h3" component="div">
        Faq
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Wie kann ich die Popularität eines Künstlers auf Spotify überprüfen?
        </AccordionSummary>
        <AccordionDetails>
          Auf unserer Website können Sie sehen, wie viele Follower ein Künstler auf Spotify hat. Wir bieten auch Einblicke in die Top-Songs und Alben des Künstlers sowie Statistiken zum generierten Einkommen.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Wie aktualisiert ihr die Informationen zu den Künstlern?
        </AccordionSummary>
        <AccordionDetails>
          Unsere Datenbank wird regelmäßig aktualisiert, um die aktuellen Informationen zu Follower-Zahlen, Top-Songs, Alben und Einkommen der Künstler auf Spotify bereitzustellen.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Kann ich die Daten für verschiedene Zeiträume anzeigen lassen?
        </AccordionSummary>
        <AccordionDetails>
          Ja, auf unserer Website können Sie die Daten für verschiedene Zeiträume anzeigen lassen, um Trends und Entwicklungen im Laufe der Zeit zu verfolgen.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          Gibt es Einschränkungen für den Zugriff auf diese Daten?
        </AccordionSummary>
        <AccordionDetails>
          Nein, die Daten sind für alle Benutzer frei zugänglich und können ohne Einschränkungen eingesehen werden.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          Bietet ihr Einblicke in andere Streaming-Plattformen an?
        </AccordionSummary>
        <AccordionDetails>
          Derzeit konzentrieren wir uns auf die Daten von Spotify. Möglicherweise werden wir in Zukunft auch Daten anderer Streaming-Plattformen hinzufügen.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          Wie genau sind die Einkommensdaten?
        </AccordionSummary>
        <AccordionDetails>
          Die Einkommensdaten basieren auf Schätzungen und können je nach verschiedenen Faktoren variieren. Sie dienen als grobe Richtlinie für das generierte Einkommen eines Künstlers auf Spotify.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8-content"
          id="panel8-header"
        >
          Kann ich euch Feedback oder Vorschläge für Verbesserungen geben?
        </AccordionSummary>
        <AccordionDetails>
          Ja, wir freuen uns über Feedback und Vorschläge für Verbesserungen. Kontaktieren Sie uns bitte über das entsprechende Formular auf unserer Website.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10-content"
          id="panel10-header"
        >
          Bietet ihr Dienstleistungen für Künstler oder Labels an?
        </AccordionSummary>
        <AccordionDetails>
          Derzeit bieten wir keine speziellen Dienstleistungen für Künstler oder Labels an, aber wir sind offen für Partnerschaften und Kooperationen. Bitte kontaktieren Sie uns, um weitere Informationen zu erhalten.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Faq

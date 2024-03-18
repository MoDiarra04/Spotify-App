import { CardActions, Button, CardContent, Avatar, Typography, Rating, Stack, Card, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ReviewCardProps {
  image: string
  name: string
  ranking: string
  description: string
  spotifyID: string
}

const ReviewCard = (props: ReviewCardProps) => {
  const { ranking, name, description, image, spotifyID } = props;
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        alignItems: "center",
        flexWrap: "nowrap",
        overflow: "visible",
        width: "40vh",
      }}
      color="white"
    >
      <CardContent>
        <Stack direction="column" spacing={1}>
          <Avatar
            sx={{ alignSelf: "center", width: 110, height: 110 }}
            alt={name}
            src={image}
          />
          <Typography variant="h6">{name}</Typography>
          <Typography color="text.secondary">Die Nummer {ranking} auf Spotify</Typography>
          <Typography>{description}</Typography>
        </Stack>
      </CardContent>
      <CardActions >
        <Button fullWidth onClick={() => navigate("/artist/" + spotifyID)} size="large" variant="outlined">Zum Künstler</Button>
      </CardActions>
    </Card>
  );
};

export default function Reviews() {
  const cardData = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/The_Weeknd_Cannes_2023.png/220px-The_Weeknd_Cannes_2023.png",
      ranking: "1",
      description:
        "The Weeknd ist ein vielseitiger kanadischer Künstler, der mit seiner einzigartigen Stimme und seinem eindringlichen Stil die Grenzen des zeitgenössischen R&B und Pop neu definiert hat und so die Spotify-Charts eroberte.",
      name: "The Weeknd",
      id: "1Xyo4u8uXC1ZmMpatF05PJ",
    },
    {
      img: "https://assets.ad-magazin.de/photos/6557824498b1772247ba4c33/1:1/w_3554,h_3554,c_limit/GettyImages-1730743172.jpg",
      ranking: "2",
      description:
        "Taylor Swift ist eine preisgekrönte Singer-Songwriterin, die für ihre eindringlichen Texte, eingängigen Melodien und vielseitigen musikalischen Stile bekannt ist.",
      name: "Taylor Swift",
      id: "06HL4z0CvFAxyc27GXpf02",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rihanna_Fenty_2018.png/220px-Rihanna_Fenty_2018.png",
      ranking: "3",
      description:
        "Rihanna ist eine international gefeierte Sängerin, Songwriterin, Schauspielerin und Unternehmerin, die mit ihrer einzigartigen Stimme, ihrem Stil und ihrer kreativen Vielseitigkeit die Popkultur maßgeblich geprägt hat.",
      name: "Rihanna",
      id: "5pKCCKE2ajJHZ9KAiaK11H",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_July_2016.jpg/220px-Drake_July_2016.jpg",
      ranking: "4",
      description:
        "Drake ist ein bahnbrechender kanadischer Rapper, Sänger und Produzent, der durch seine unverwechselbare Musik, seine lyrischen Fähigkeiten und seinen Einfluss auf die Hip-Hop-Kultur weltweit bekannt geworden ist.",
      name: "Drake",
      id: "3TVXtAsR1Inumwj472S9r4",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ariana_Grande_during_The_Honeymoon_Tour_in_Jakarta_2015.jpg/220px-Ariana_Grande_during_The_Honeymoon_Tour_in_Jakarta_2015.jpg",
      ranking: "5",
      description:
        "Ariana Grande ist eine herausragende amerikanische Sängerin und Schauspielerin, die mit ihrer beeindruckenden Stimme, ihrem künstlerischen Talent und ihrer charismatischen Persönlichkeit zu einer der führenden Pop-Ikonen ihrer Generation avanciert ist.",
      name: "Ariana Grande",
      id: "66CXWjxzNUsdJxJ2JdwvnR",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/220px-Justin_Bieber_in_2015.jpg",
      ranking: "6",
      description:
        "Justin Bieber ist ein international erfolgreicher kanadischer Sänger und Songwriter, der mit seinem charakteristischen Pop-R&B-Stil, seiner bemerkenswerten Stimme und seinem Aufstieg zum Teenie-Idol weltweite Anerkennung erlangt hat.",
      name: "Justin Bieber",
      id: "1uNFoZAHBGtllmzznpCI3s",
    },
  ];

  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#121212",
          pt: 4,
          width: "100%",
        }}
        color="white"
      >
        <Typography variant="body1">Guck dir mal diese Top-Artists an!</Typography>
        <Rating name="bewertung" defaultValue={5} readOnly />
        <Typography variant="body1">Die besten Künstler auf ganz Spotify auf einen Blick</Typography>
      </Box>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#121212",
          p: 4,
          width: "100%",
          overflow: "auto",
        }}
        color="white"
      >
        <Stack direction="row" sx={{ pt: 0 }} spacing={2}>
          {cardData.map((data) => (
            <ReviewCard
              key={data.name}
              image={data.img}
              name={data.name}
              description={data.description}
              ranking={data.ranking}
              spotifyID={data.id}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
}

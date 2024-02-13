import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

interface ReviewCardProps {
  image: string;
  name: string;
  job: string;
  content: string;
}

const ReviewCard = (props: ReviewCardProps) => {
  const { job, name, content, image } = props;

  return (
    <Card
      sx={{
        alignItems: "center",
        flexWrap: "nowrap",
        overflow: "visible",
        width: "40vh"
      }}
      color="white"
    >
      <CardContent>
        <Stack direction="column" spacing={1}>
          <Avatar
            sx={{ alignSelf: "center", width: 60, height: 60 }}
            alt={name}
            src={image}
          />
          <Typography>{name}</Typography>
          <Typography color="text.secondary">{job}</Typography>
          <Typography>{content}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default function Reviews() {
  const cardData = [
    {
      img: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=996&t=st=1696269139~exp=1696269739~hmac=575d8dfc2e7841d5ddf51fe756c4642adbfd453aad6d8e520b4f6b26dec8b282",
      job: "Altenpfleger",
      content:
        "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
      name: "Marcel",
    },
    {
      img: "https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg?w=1380&t=st=1696269228~exp=1696269828~hmac=055fde891df47a7de96d63f9b7bbb7922b16ac578ff43f5b573456d86a21065d",
      job: "KFZ-Mechatroniker",
      content:
        "bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla",
      name: "Benjamin",
    },
    {
      img: "https://img.freepik.com/free-photo/smiling-pretty-woman-posing-camera-park_1262-19062.jpg?w=1380&t=st=1696269250~exp=1696269850~hmac=2913c2b11f7f9d2426cac8408fd6f24d926c02cd49596b71f5d04c330ddb4af1",
      job: "Personalmangerin",
      content:
        "bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla.",
      name: "Claudia",
    },
    {
      img: "https://img.freepik.com/free-photo/outdoor-shot-young-caucasian-man-with-beard-relaxing-open-air-surrounded-by-beautiful-mountain-setting-rainforest_273609-1855.jpg?w=1380&t=st=1696269264~exp=1696269864~hmac=4063a1c5cd9dd74d23903c87319d07d3c087604182ee8031745fb3e7ba243089",
      job: "Sporttrainer",
      content:
        "bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla",
      name: "Tom",
    },
    {
      img: "https://img.freepik.com/free-photo/indoor-shot-beautiful-young-caucasian-female-wearing-polo-shirt-rectangular-glasses-smiling-happily-while-posing-isolated_273609-1875.jpg?w=1380&t=st=1696269283~exp=1696269883~hmac=78d885af4a2cebabe6c1029657828db2dc2155c17f0ee6c27515322555978d66",
      job: "Kauffrau Ecommerce",
      content:
        "bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla",
      name: "Janina",
    },
    {
      img: "https://img.freepik.com/free-photo/blond-man-happy-expression_1194-1917.jpg?w=1380&t=st=1696325885~exp=1696326485~hmac=03859cea6108b36d199dc99ef615f01494a421ab4786609190fe67db0f24881c",
      job: "Systemelektroniker",
      content:
        "bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla",
      name: "Jakob",
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
        <Typography variant="body1">Bewertungen</Typography>
        <Typography variant="body1">4,5 / 5</Typography>
        <Rating name="bewertung" defaultValue={4.5} precision={0.5} readOnly />
        <Typography variant="body1">Basierend auf 1.422 Bewertungen</Typography>
      </Box>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#121212",
          pt: 0,
          p: 4,
          width: "100%",
          overflow: "auto",
        }}
        color="white"
      >
        <Stack direction="row" sx={{ pt: 3 }} spacing={2}>
          {cardData.map((data) => (
            <ReviewCard
              key={data.name}
              image={data.img}
              name={data.name}
              content={data.content}
              job={data.job}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
}

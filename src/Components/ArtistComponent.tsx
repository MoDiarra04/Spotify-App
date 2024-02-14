import { useParams } from "react-router-dom";
import { Typography, Container, Stack, Grid, Link } from "@mui/material";
import { getArtist,getArtist_TopTracks } from "../Utils/fetch";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AlbumIcon from '@mui/icons-material/Album';

export const ArtistComponent = () => {
  const { id } = useParams();
  const [artist,setArtist] = useState<any>()
  const [topTrack,setTopTrack] = useState<any>()
  useEffect(()=>{
    if(id !== undefined){
      getArtist(id).then((res)=>{
        setArtist(res)
      })
      getArtist_TopTracks(id).then((res)=>{
        setTopTrack(res)
      })
    }},[])
  console.log(artist)
  console.log(topTrack)
  return (
    <Container maxWidth="xl">
      <Stack direction="column" spacing={5} useFlexGap>
        <Typography variant="h2" textAlign="center">
          {artist?artist?.name:""}
        </Typography>
        <Box>        
          <img style= {{borderRadius:'40px'}} src={artist?artist?.images[2].url:""} alt="" />
        </Box>
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.4)' }}
        >
          <Grid container spacing={2} fontSize='60px'>
            <Grid item xs={4}>
              <PeopleAltIcon sx={{fontSize:60}} />
            </Grid>
            <Grid item xs={8}>
              {artist?artist?.followers.total:""}
            </Grid>
            <Grid item xs={4}>
            <AlbumIcon sx={{fontSize:60}} />
            </Grid>
            <Grid item xs={8}>
              xs=8
            </Grid>
          </Grid>
        </Box>
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

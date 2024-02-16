import * as React from 'react';
import { useParams } from "react-router-dom";
import { Tooltip, Typography, Container, Stack, Grid, Link, Modal, Fade, Button, Backdrop } from "@mui/material";
import { getArtist, getArtist_TopTracks } from "../Utils/fetch";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AlbumIcon from '@mui/icons-material/Album';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface TableType {
  album: string,
  song: string
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const ArtistComponent = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState<any>()
  const [topTrack, setTopTrack] = useState<any>()
  useEffect(() => {
    if (id !== undefined) {
      getArtist(id).then((res) => {
        setArtist(res)
      })
    }
  }, [])
  useEffect(() => {
    if (id !== undefined) {
      getArtist_TopTracks(id).then((res) => {
        setTopTrack(res)
      })
    }
  }, [artist])

  useEffect(() => {
    if (topTrack !== undefined) {
      console.log(topTrack.tracks)
    }
  }, [topTrack])

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [row, setRow] = useState<Array<TableType>>([])
  useEffect(() => {
    if (topTrack !== undefined)
      setRow(topTrack.tracks.map((item: any) => {
        return { album: item.album.name, song: item.name }
      }))
    console.log(row)
  }, [topTrack])

  return (
    <Container maxWidth="xl">
      <Typography variant="h2" textAlign="center">
        {artist ? artist?.name : ""}
      </Typography>
      <a href={`https://open.spotify.com/search/${artist ? artist?.name : ""}`}>
        <img style={{ width: '100px' }}
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="" />
      </a>
      <Stack direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        spacing={2} marginTop='30px'
      >
        <Box sx={{ height: '320px' }}>
          <Button onClick={handleOpen}>
            <img style={{ borderRadius: '170px' }} src={artist ? artist?.images[1].url : ""} alt="" />
          </Button>
        </Box>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <img src={artist ? artist?.images[1].url : ""} alt="" />
            </Box>
          </Fade>
        </Modal>
        <Box
          component="span"
          sx={{
            display: 'inline-block', mx: '2px',
            transform: 'scale(0.6)', backgroundColor: '#242526',
            color: 'white', padding: '30px 5px 10px 5px',
            borderRadius: 3, boxShadow: 3
          }}
        >
          <Grid container spacing={2} fontSize='40px'>
            <Grid item xs={4}>
              <Tooltip title='Follower' placement="left">
                <PeopleAltIcon sx={{ fontSize: 60 }} />
              </Tooltip>
            </Grid>
            <Grid item xs={8}>
              {artist ? artist?.followers.total : ""}
            </Grid>
            <Grid item xs={4}>
              <Tooltip title='Popularity' placement="left">
                <LocalFireDepartmentIcon sx={{ fontSize: 60 }} />
              </Tooltip>
            </Grid>
            <Grid item xs={8}>
              {artist ? artist?.popularity : ""}
            </Grid>
            <Grid item xs={4}>
              <Tooltip title='Albums' placement="left">
                <AlbumIcon sx={{ fontSize: 60 }} />
              </Tooltip>
            </Grid>
            <Grid item xs={8}>
              {topTrack ? topTrack?.tracks.length : ""}
            </Grid>
          </Grid>
        </Box>
      </Stack>
      <Stack marginTop='50px'
      justifyContent="center"
      alignItems="center"
      >
        <TableContainer component={Paper} sx={{width:'800px'}}>
          <Table sx={{minWidth:650}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Album</TableCell>
                <TableCell align="right">Top-Song</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((item) => (
                <TableRow
                  key={item.album}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.album}
                  </TableCell>
                  <TableCell align="right">{item.song}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Container >
  );
};

export default ArtistComponent;

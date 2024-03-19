import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumIcon from "@mui/icons-material/Album";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Backdrop, Button, Container, Fade, Grid, Modal, Stack, Tooltip, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import { Artist, song } from "../Utils/artist";
import { getArtist, getArtist_TopTracks, getSong } from "../Utils/fetch";
import { FollowerChart, StreamChart } from "./ChartComponents";

interface TableType {
  album: string;
  song: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const ArtistComponent = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState<Artist>();
  const [topTrack, setTopTrack] = useState<Array<song>>();
  const [top5songs, setTop5Songs] = useState<song>();


  useEffect(() => {
    if (id) {
      getArtist(id).then((res) => {
        setArtist(res);
      });
      getArtist_TopTracks(id).then((res) => {
        setTopTrack(res);
      });
      getSong("Goosebumps").then((res) => {
        setTop5Songs(res);
      });
    }
  }, []);

  useEffect(() => {
    console.log(artist);
  }, [artist]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [row, setRow] = useState<Array<TableType>>([]);
  useEffect(() => {
    if (topTrack !== undefined)
      setRow(
        topTrack.map((item: any) => {
          return { album: item.album.name, song: item.name };
        })
      );
  }, [topTrack]);

  return (
    <Box sx={{ px: 2}}>
      <Typography variant="h2" textAlign="center">
        {artist ? artist?.name : ""}
      </Typography>
      <a href={`https://open.spotify.com/search/${artist ? artist?.name : ""}`}>
        <img
          style={{ width: "100px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
          alt=""
        />
      </a>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
        marginTop="30px"
      >
        <Box sx={{ height: "320px" }}>
          <Button onClick={handleOpen}>
            <img
              style={{ borderRadius: "170px" }}
              src={artist?.images ? artist?.images[1].url : ""}
              alt=""
            />
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
              <img src={artist?.images ? artist?.images[1].url : ""} alt="" />
            </Box>
          </Fade>
        </Modal>
        <Box
          component="span"
          sx={{
            display: "inline-block",
            mx: "2px",
            transform: "scale(0.6)",
            backgroundColor: "#242526",
            color: "white",
            padding: "30px 30px 30px 5px",
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <Grid container spacing={2} fontSize="40px">
            <Grid item xs={4}>
              <Tooltip title="Follower" placement="left">
                <PeopleAltIcon sx={{ fontSize: 60 }} />
              </Tooltip>
            </Grid>
            <Grid item xs={8}>
              {artist ? artist?.followers?.total : ""}
            </Grid>
            <Grid item xs={4}>
              <Tooltip title="Popularity" placement="left">
                <LocalFireDepartmentIcon sx={{ fontSize: 60 }} />
              </Tooltip>
            </Grid>
            <Grid item xs={8}>
              {artist ? artist?.popularity : ""}
            </Grid>
            <Grid item xs={4}>
              <Tooltip title="Genre" placement="left">
                <AlbumIcon sx={{ fontSize: 60 }} />
              </Tooltip>
            </Grid>
            <Grid item xs={8}>
              {artist?.genres ? artist?.genres[0] : ""}
            </Grid>
          </Grid>
        </Box>
      </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
              {artist?.followers?.total &&
                <FollowerChart follower={parseInt(artist?.followers?.total)} />
              }
              {artist?.followers?.total &&
                <StreamChart streams={parseInt(artist?.followers?.total)} />
              }
        </Stack>
      <Stack marginTop="50px" alignItems="center" >
        <Grid container spacing={6} fontSize="25px" justifyContent="center">
          <Grid item>1</Grid>
          <Grid item>
            <img
              src={top5songs ? top5songs?.album?.images[2].url : ""}
              alt=""
            />
          </Grid>
          <Grid item>{top5songs ? top5songs?.name : ""}</Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Songname</TableCell>
                <TableCell align="right">Album</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((item) => (
                <TableRow
                  key={item.song}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.song}
                  </TableCell>
                  <TableCell align="right">{item.album}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  );
};

export default ArtistComponent;

import React from 'react'
import {useGlobalContext} from './Context'
import { AppContext } from './Context'
import MainPage from './mainpage'
import Navbar from './Navbar'
import { Box } from '@mui/material'

const Body = () => {
  const {artist,setArtist} = useGlobalContext()
  if(artist !== undefined){
    console.log(artist)
    return (
      <Box sx={{ m: -1 }}>
        <Navbar/>
        <Box sx={{ m: 2 }}>
          <MainPage/>
          <img src={artist.images[2].url} alt="" />
          <div>{artist.name}</div>
          <div>{artist.followers.total}</div>
        </Box>
      </Box>
    )
  }
}

export default Body
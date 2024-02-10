import React from 'react'
import {useGlobalContext} from './Context'
import { AppContext } from './Context'
import MainPage from './mainpage'
import Navbar from './Navbar'

const Body = () => {
  const {artist,setArtist} = useGlobalContext()
  if(artist !== undefined){
    console.log(artist)
    return (
      <>
        <Navbar/>
        <MainPage/>
        <img src={artist.images[2].url} alt="" />
        <div>{artist.name}</div>
        <div>{artist.followers.total}</div>
      </>
    )
  }
}

export default Body
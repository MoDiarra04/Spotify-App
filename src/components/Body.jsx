import React from 'react'
import {useGlobalContext} from './Context'
import { AppContext } from './Context'

function Body() {
  const {artist,setArtist} = useGlobalContext()
  if(artist != undefined){
    console.log(artist)
    return (
      <div>
        <h1>Test</h1>
        <img src={artist.images[2].url} alt="" />
        <div>{artist.name}</div>
        <div>{artist.followers.total}</div>
      </div>
    )
  }
}

export default Body
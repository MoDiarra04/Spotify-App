import React from 'react'
import {useGlobalContext} from '../Context'
import { AppContext } from '../Context'

function Body() {
  const {artist,setArtist} = useGlobalContext()
  return (
    <div>
      <img src={artist.images[2].url} alt="" />
      <div>{artist.followers.total}</div>
    </div>
  )
}

export default Body
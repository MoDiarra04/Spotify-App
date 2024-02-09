import React,{useEffect, useState,useContext} from 'react'
import axios from 'axios'
import {Buffer} from 'buffer'
import qs from 'qs'

const AppContext = React.createContext()
let id = '3TVXtAsR1Inumwj472S9r4'
let id2 = '4q3ewBCX7sLwd24euuV69X'

const AppProvider = ({children}) =>{
  const [album,setAlbum] = useState()
  const [artist,setArtist] = useState()
  const [top_tracks,setTop_Tracks] = useState()

  const clientId = process.env.REACT_APP_SPOTIFY_API_ID;
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const auth_token = Buffer.from(`${clientId}:${clientSecret}`, 'utf-8').toString('base64');

  const getAuth = async () => {
    try{
      //make post request to SPOTIFY API for access token, sending relavent info
      const token_url = 'https://accounts.spotify.com/api/token';
      const data = qs.stringify({'grant_type':'client_credentials'});
  
      const response = await axios.post(token_url, data, {
        headers: { 
          'Authorization': `Basic ${auth_token}`,
          'Content-Type': 'application/x-www-form-urlencoded' 
        }
      })
      return response.data.access_token;
    }catch(error){
      console.log(error);
    }
  }

  const getArtist_Albums = async () => {
    const access_token = await getAuth()
    const api_url = `https://api.spotify.com/v1/artists/${id}/albums`;

    try{
      const response = await axios.get(api_url, {
        headers: { 
          'Authorization': `Bearer ${access_token}`,
        }
      })
      setAlbum(response.data)
      }catch(error){
        console.log(error)
      }
  }

  const getArtist_TopTracks = async () => {
    const access_token = await getAuth()
    const api_url = `https://api.spotify.com/v1/artists/${id}/top-tracks`;

    try{
      const response = await axios.get(api_url, {
        headers: { 
          'Authorization': `Bearer ${access_token}`,
        }
      })
      setTop_Tracks(response.data)
      }catch(error){
        console.log(error)
      }
  }

  const getArtist = async (id) => {
    const access_token = await getAuth()
    const api_url = `https://api.spotify.com/v1/artists/${id}`;

    try{
      const response = await axios.get(api_url, {
        headers: { 
          'Authorization': `Bearer ${access_token}`,
        }
      })
      setArtist(response.data)
      }catch(error){
        console.log(error)
      }
  }
  
  useEffect(()=>{
    getArtist(id2)
  },[])

  return <AppContext.Provider value= {{artist,setArtist}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () =>{
  return useContext(AppContext)
}
export {AppContext,AppProvider} 






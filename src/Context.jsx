import React,{useEffect, useState,useContext} from 'react'
import axios from 'axios'
import {Buffer} from 'buffer'
import qs from 'qs'

const AppContext = React.createContext()
const AppProvider = ({children}) =>{
  const [genres,setGenres] = useState()
  const [artist,setArtist] = useState()

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
      //return access token
      return response.data.access_token;
      //console.log(response.data.access_token);   
    }catch(error){
      //on fail, log the error in console
      console.log(error);
    }
  }

  const getGenre = async () => {
    const access_token = await getAuth()
    const api_url = 'https://api.spotify.com/v1/recommendations/available-genre-seeds';

    try{
      const response = await axios.get(api_url, {
        headers: { 
          'Authorization': `Bearer ${access_token}`,
        }
      })
      setGenres(response.data.genres)
      return response.data
      }catch(error){
        console.log(error)
      }
  }

  const getArtist = async () => {
    const access_token = await getAuth()
    let id = '3TVXtAsR1Inumwj472S9r4'
    const api_url = `https://api.spotify.com/v1/artists/${id}`;

    try{
      const response = await axios.get(api_url, {
        headers: { 
          'Authorization': `Bearer ${access_token}`,
        }
      })
      setArtist(response.data)
      return response.data
      }catch(error){
        console.log(error)
      }
  }
  
  useEffect(()=>{
    getArtist()
  },[])
  useEffect(()=>{
    console.log(artist)
  },[artist])

  return <AppContext.Provider value= {{artist,setArtist,genres,setGenres}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () =>{
  return useContext(AppContext)
}
export {AppContext,AppProvider} 






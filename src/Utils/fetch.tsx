import axios from "axios";
import { Buffer } from "buffer";
import qs from "qs";

const clientId = process.env.REACT_APP_SPOTIFY_API_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const auth_token = Buffer.from(`${clientId}:${clientSecret}`, "utf-8").toString("base64");

const artist_list = [
  {
    id: "4q3ewBCX7sLwd24euuV69X",
    name: "Bad Bunny",
  },
  {
    id: "06HL4z0CvFAxyc27GXpf02",
    name: "Taylor Swift",
  },
];

const getAuth = async () => {
  const token_url = "https://accounts.spotify.com/api/token";
  const data = qs.stringify({ grant_type: "client_credentials" });

  const response = await axios.post(token_url, data, {
    headers: {
      Authorization: `Basic ${auth_token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return await response.data.access_token;
};

{
  /*const getArtist_Albums = async () => {
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
*/
}

export const getArtist_TopTracks = async (id:string) => {
    const access_token = await getAuth()
    const api_url = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=DE`;

    try{
      const response = await axios.get(api_url, {
        headers: { 
          'Authorization': `Bearer ${access_token}`,
        }
      })
      return response.data
      }catch(error){
        console.log(error)
      }
  }


export const searchArtistByName = async (input: string) => {
  const access_token = await getAuth();
  const api_url = `https://api.spotify.com/v1/search?q=${input}+&type=artist&limit=5`;
  try {
    const response = await axios.get(api_url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getArtist = async (id: string) => {
  const access_token = await getAuth();
  const api_url = `https://api.spotify.com/v1/artists/${id}`;
  try {
    const response = await axios.get(api_url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchArtists = () => {
  let temp: any = [];
  getArtist(artist_list[0].id).then((res) => temp.push(res));
  getArtist(artist_list[1].id).then((res) => temp.push(res));
  return temp;
};

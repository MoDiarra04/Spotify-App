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
{
  /*const getArtist_TopTracks = async () => {
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
*/
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

const getArtist = async (id: string) => {
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

export const fetchArtistMonthlyStreams = async (id: string) => {

  const res = await fetch("https://proxy.cors.sh/https://open.spotify.com/intl-de/artist/" + id, {
    headers: {
      "x-cors-api-key": "temp_699d04243205d1ddd0041044ed8ac8c5",
    },
  });
  const text = await res.text();

  const index = text.lastIndexOf("monatliche")
  const begin = text.slice(0, index).lastIndexOf(">");

  return parseInt(text.slice(begin + 1, index).replaceAll(".", ""))
};

interface song{
  name: string,
  streams: number
}

export const fetchAristTop5Songs = async (id: string) => {
  const res = await fetch(
    "https://proxy.cors.sh/https://open.spotify.com/intl-de/artist/" + id,
    {
      headers: {
        "x-cors-api-key": "temp_699d04243205d1ddd0041044ed8ac8c5",
      },
    }
  );
  let html = await res.text();

  let data: song[] = [];
  for (let i = 0; i < 5; i++) {
    const indexName = html.indexOf('class="ListRowTitle');
    html = html.slice(indexName);

    let name = html.slice(getHtmlStart(html) + 1, gethtmlEnd(html));

    const indexStreams = html.indexOf("listrow-subtitle-track-spotify:track:");
    html = html.slice(indexStreams);

    const streams = parseInt(html.slice(getHtmlStart(html) + 1, gethtmlEnd(html)).replaceAll(".", ""));

    data.push({
      name: name,
      streams: streams,
    });
    html = html.slice(gethtmlEnd(html));
  }
  return data;
};

const getHtmlStart = (html: string) => {
  return html.indexOf(">")
}

const gethtmlEnd = (html: string) => {
  return html.indexOf("<")
}
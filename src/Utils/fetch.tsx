import axios from "axios";
import { Buffer } from "buffer";
import qs from "qs";
import { song, Artist } from "./artist";

const clientId = process.env.REACT_APP_SPOTIFY_API_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const auth_token = Buffer.from(`${clientId}:${clientSecret}`, "utf-8").toString(
  "base64"
);

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

export const getArtist_TopTracks = async (id: string) => {
  const access_token = await getAuth();
  const api_url = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=DE`;

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

export const fetchArtistMonthlyStreams = async (id: string) => {
  const res = await fetch(
    "https://proxy.cors.sh/https://open.spotify.com/intl-de/artist/" + id,
    {
      headers: {
        "x-cors-api-key": "temp_699d04243205d1ddd0041044ed8ac8c5",
      },
    }
  );
  checkResponse(res);
  const text = await res.text();

  const index = text.lastIndexOf("monatliche");
  if (index === -1) {
    throw new Error("Fehler bei der fetch request");
  }
  const begin = text.slice(0, index).lastIndexOf(">");

  return parseInt(text.slice(begin + 1, index).replaceAll(".", ""));
};

export const fetchAristTop5Songs = async (id: string) => {
  const res = await fetch(
    "https://proxy.cors.sh/https://open.spotify.com/intl-de/artist/" + id,
    {
      headers: {
        "x-cors-api-key": "temp_699d04243205d1ddd0041044ed8ac8c5",
      },
    }
  );
  checkResponse(res);
  let html = await res.text();

  let data: song[] = [];
  for (let i = 0; i < 5; i++) {
    const indexName = html.indexOf('class="ListRowTitle');
    if (indexName === -1) break;
    html = html.slice(indexName);

    let name = html.slice(html.indexOf(">") + 1, html.indexOf("<"));

    const indexStreams = html.indexOf("listrow-subtitle-track-spotify:track:");
    if (indexStreams === -1) break;
    html = html.slice(indexStreams);

    const streams = parseInt(
      html.slice(html.indexOf(">") + 1, html.indexOf("<")).replaceAll(".", "")
    );

    data.push({
      name: name,
      streams: streams,
    });
    html = html.slice(html.indexOf("<"));
  }
  return data;
};

export const fetchTop50Artists = async () => {
  const res = await fetch(
    "https://proxy.cors.sh/https://en.wikipedia.org/wiki/List_of_most-streamed_artists_on_Spotify",
    {
      headers: {
        "x-cors-api-key": "temp_699d04243205d1ddd0041044ed8ac8c5",
      },
    }
  );
  checkResponse(res);
  let html = await res.text();

  let data: Artist[] = [];
  for (let i = 0; i < 50; i++) {
    let index = html.indexOf('<td style="text-align: left;">');
    html = html.slice(index + 35);
    const name = html.slice(html.indexOf(">") + 1, html.indexOf("<"));
    const streams = html.slice(html.indexOf("<td>") + 4, html.indexOf("</td>", html.indexOf("</td>") + 1));

    data.push({
      name: name,
      monthlyStreams: streams.replaceAll(".", "") + "0000",
    })
  }
  return data;
};

const checkResponse = (response: Response) => {
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
};

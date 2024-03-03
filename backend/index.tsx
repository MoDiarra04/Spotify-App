const express = require("express");
const port = 8088;

const app = express();

//handler modules
const { handleGetArtist, handleSearchArtist, handleGetTop50Artist } = require("./handler.tsx");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/getArtist/:id", (req, res) => handleGetArtist(req, res));
app.get("/searchArtist/:search", (req, res) => handleSearchArtist(req, res));
app.get("/getTop50Artists", (req, res) => handleGetTop50Artist(req, res));

app.listen(port, () => {
  console.log("Server active: listening on port: " + port)
});

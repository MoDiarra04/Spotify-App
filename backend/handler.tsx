const { queryArtistByID } = require("./query.tsx");

module.exports.handleGetArtist = (req, res) => {
  console.log("handleGetArtist called");
  const query = queryArtistByID(req.params.id);
  if (!query) {
    res.send("Query resulted no artist");
  } else {
    res.send(query);
  }
};

module.exports.handleSearchArtist = (req, res) => {
  console.log("handleSearchArtist called");
  res.send("hello world");
};

module.exports.handleGetTop50Artist = (req, res) => {
  console.log("handleGetTop50Artist called");
  res.send("hello world");
};
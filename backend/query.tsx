const mysql = require("mysql2");

const con = mysql.createConnection({
  user: "doadmin",
  password: "AVNS_k_GH1Ti3HNkRnGY75lv",
  host: "db-mysql-fra1-77185-do-user-15942971-0.c.db.ondigitalocean.com",
  port: "25060",
  database: "defaultdb",
});

con.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("Connected to database");
});

const queryArtist = (id) => {
  let query = `SELECT * FROM Artist;`
  const res = con.query(query, (err, result, fields) => {
    if (err) throw err;
    if (!result.length) {
      console.log("no result")
      return "123";
    }
    console.log(result)
    console.log(id)
    return result;
  });
  return res;
};

/*module.exports.queryArtistByID = (id) => {
  const res = queryArtist(id);
  if(!res) {
    //fetch Spotify API and get new Artist
    const newRes = getArtist(id);
    const artist: Artist = {
      name: "test",
      monthlyStreams: 100000
    } 
    return artist;
  }
  return res;
};*/

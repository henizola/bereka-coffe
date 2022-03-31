const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("./views"));

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const slider = [
    {
      title: "The opening of the Telecommunications Market",
      img: "img/banner/1.jpg",
    },
    {
      title: "The opening of the Telecommunications Market",
      img: "img/banner/1.jpg",
    },
    {
      title: "The opening of the Telecommunications Market",
      img: "img/banner/1.jpg",
    },
  ];
  res.render("index", { slider });
});

app.listen(3000, () => {
  console.log("server is listning to port 3001");
});

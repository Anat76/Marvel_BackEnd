/*=====================================SETUP=======================================*/

const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

app.use(express.json());
app.use(cors());

/*=====================================ROUTES=======================================*/

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvue sur mon backend 🎉" });
});

app.get("/comics", async (req, res) => {
  try {
    const result = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`
    );
    console.log(result.data);
    // console.log(process.env.MARVEL_API_KEY);
  } catch (error) {
    console.log(error.response.data);
  }
});

// Route 404
app.all("*", (req, res) => {
  res.status(404).json({ message: "This route do not exist" });
});

/*=====================================LANCEMENT-SERVER=======================================*/

app.listen(3000, () => {
  console.log("Server has started");
});

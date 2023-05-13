/*=====================================SETUP=======================================*/

const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const morgan = require("morgan");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

/*=====================================ROUTES=======================================*/
/*===================IMPORT===================*/
const comicsRoutes = require("./routes/comics");
const characterRoutes = require("./routes/characters");

app.use(comicsRoutes);
app.use(characterRoutes);

/*===================DEFAULT===================*/

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvue sur mon backend 🎉" });
});

// Route 404
app.all("*", (req, res) => {
  res.status(404).json({ message: "This route do not exist" });
});

/*=====================================LANCEMENT-SERVER=======================================*/

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server has started on port ${process.env.PORT}`);
});

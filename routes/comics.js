const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  //   console.log(req.query);

  const title = req.query.title || "";
  const limit = req.query.limit || 100;
  const skip = req.query.skip || 0;

  try {
    const result = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}&title=${title}&limit=${limit}&skip=${skip}`
    );
    res.status(200).json(result.data);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/comics/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const characterId = req.params.id;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.MARVEL_API_KEY}`
    );
    // console.log(response);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/comic/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const comicId = req.params.id;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${process.env.MARVEL_API_KEY}`
    );
    // console.log(response);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;

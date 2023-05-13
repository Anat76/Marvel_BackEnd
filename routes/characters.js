const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  const limit = req.query.limit || 100;
  //   const skip = req.query.skip || 0;
  const name = req.query.name || "";
  // page
  const page = req.query.page || 1;
  let pageFilter = 1;

  if (page) {
    pageFilter = page;
  }
  const skip = (pageFilter - 1) * limit;

  try {
    const result = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&limit=${limit}&skip=${skip}&name=${name}`
    );
    // console.log(result.data);
    res.status(200).json(result.data);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/character/:id", async (req, res) => {
  //   console.log(req.params);
  const characterId = req.params.id;
  //   console.log(characterId);
  try {
    const result = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.status(200).json(result.data);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;

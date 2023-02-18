const axios = require("axios");
const gotBaseURL = "https://api.unsplash.com/photos";
const unsplashAK = process.env.UNSPLASH_ACCESS_KEY;
const clientId = "?client_id="

const getPhotos = async (req, res, next) => {
  try {
    const response = await axios.get(
      `${gotBaseURL}${clientId}${unsplashAK}`
    );
    const photos = response.data.map((photo) => photo.urls.raw);
    res.status(200).json(photos);
  } catch (err) {
    console.log(err);
    res.status(400).json({error: "Server error. Please try again later."});
  }
};

module.exports = { getPhotos };

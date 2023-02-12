const axios = require('axios')
const asyncHandler = require("express-async-handler");
require('dotenv').config()
const Unsplash = "https://api.unsplash.com/photos"


const getPhotos = asyncHandler(async (req, res, next) => {
    try {
      const response = await axios.get(`${Unsplash + process.env.UNSPLASH_ACCESS_KEY}`);
      const photos = await response.data;
      res.status(200).json(photos);
    } catch (err) {
      res.status(500);
      res.json({
        message: "Server error. Please try again later.",
      });
      next(err);
    }
  });

module.exports = { getPhotos }
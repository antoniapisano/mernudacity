const axios = require("axios");
const gotBaseURL = "https://api.unsplash.com/";
const unsplashAK = process.env.UNSPLASH_ACCESS_KEY;
const clientId = "?client_id="

const getPhotos = async (req, res, next) => {
  try {
    const response = await axios.get(
      `${gotBaseURL}photos/${clientId}${unsplashAK}`
    );
    const photos = response.data.map((photo) => photo.urls.raw);
    res.status(200).json({photos});
  } catch (err) {
    console.log(err);
    res.status(400).json({error: "Server error. Please try again later."});
  }
};

const getSinglePhoto = async (req, res, next) => {
    const id = req.params.id;
    try {
      const response = await axios.get(`${gotBaseURL}photos/${id}${clientId}${unsplashAK}`);
      const photo = response.data;
      res.status(200).json({photo});
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "Server error. Please try again later." });
    }
  };

  const getUsernamePhoto = async (req, res, next) => {
    const username = req.params.username;
    try {
      const response = await axios.get(`${gotBaseURL}users/${username}/photos${clientId}${unsplashAK}`);
      const userphotos = response.data.map((user) => (
        {id: user.id, 
        username: user.user.username, 
        description: user.description || "No description provided.", 
        url: user.urls.raw}));
      res.status(200).json({userphotos});
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "Server error. Please try again later." });
    }
  };
  

module.exports = { getPhotos, getSinglePhoto, getUsernamePhoto };

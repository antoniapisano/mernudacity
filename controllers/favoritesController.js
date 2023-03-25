const asyncHandler = require('express-async-handler')
const Favorites = require('../models/favoritePhotoModel.js')

const addFave = asyncHandler(async (req, res) => {
  const { user, url, description, username, explanation } = req.body;

  if (!user || !url || !description || !username || !explanation) {
    res.status(400);
    throw new Error("Please make sure that all fields are completed");
  }

  const newFave = await Favorites.create({user, url, description, username, explanation,});

  res.status(200).json({ Message: "Added to Favorites", newFave });
});
  


const getFave = asyncHandler(async (req, res) => {
  const faves = await Favorites.find({ user: req.user.id });

  res.status(200).json({ faves });
});

const removeFave = asyncHandler(async (req, res) => {
    const faves = await Favorites.findById(req.params.id)
  
    if (!faves) {
      res.status(400)
      throw new Error('Favorite photo not found')
    }
  
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    if (faves.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    await faves.remove()
  
    res.status(200).json({ id: req.params.id })
  })

  const editFave = asyncHandler(async (req, res) => {
    const faves = await Favorites.findById(req.params.id)
  
    if (!faves) {
      res.status(400)
      throw new Error('Favorite photo not found')
    }
  
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    if (faves.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    const editedFave = await Favorites.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json({editedFave})
  })
  
  module.exports = { addFave, getFave, removeFave, editFave }
const asyncHandler = require('express-async-handler')
const Favourites = require('../models/favoritePhotoModel.js')

const addFave = asyncHandler(async (req, res) => {
    const faves = await Favourites.create({ user, url, description, username, explanation })
    if (!user || !url || !description || !username || !explanation) {
      res.status(400);
      throw new Error("Please complete all fields");
    }
    res.status(200).json({faves})
  })
  


const getFave = asyncHandler(async (req, res) => {
  const faves = await Favourites.find({ user: req.user.id })
  if (faves.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not found')
  }
  res.status(200).json({faves})
})

const removeFave = asyncHandler(async (req, res) => {
    const faves = await Favourites.findById(req.params.id)
  
    if (!faves) {
      res.status(400)
      throw new Error('Favourite photo not found')
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
    const faves = await Favourites.findById(req.params.id)
  
    if (!faves) {
      res.status(400)
      throw new Error('Favourite photo not found')
    }
  
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    if (faves.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    const editedFave = await Favourites.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json({editedFave})
  })
  
  module.exports = { addFave, getFave, removeFave, editFave }
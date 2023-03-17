const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const { getFave, setFave, deleteFave, updateFave } = require('controllers/favoritesController.js')

router.get('/',protect, getFave)
router.post('/', protect, setFave)
router.delete('/:id', protect, deleteFave)
router.put('/:id', protect, updateFave)

module.exports = router
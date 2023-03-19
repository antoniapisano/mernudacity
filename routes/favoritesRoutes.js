const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const { addFave, getFave, removeFave, editFave } = require('../controllers/favoritesController.js')

router.post('/', protect, addFave)
router.get('/', protect, getFave)
router.delete('/:id', protect, removeFave)
router.put('/:id', protect, editFave)

module.exports = router
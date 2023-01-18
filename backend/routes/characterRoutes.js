const express = require('express')
const router = express.Router()
const {
  getCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} = require('../controllers/characterController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getCharacter).post(protect, createCharacter)
router.route('/:id').delete(protect, deleteCharacter).put(protect, updateCharacter)

module.exports = router

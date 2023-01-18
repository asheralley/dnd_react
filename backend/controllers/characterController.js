const asyncHandler = require('express-async-handler')

const Character = require('../models/characterModel');
const User = require('../models/userModel');

// @desc    Get character
// @route   GET /api/character
// @access  Private
const getCharacter = asyncHandler(async (req, res) => {
  const character = await Character.find({ user: req.user.id })

  res.status(200).json(character)
})

// @desc    create chacter
// @route   POST /api/characters
// @access  Private
const createCharacter = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const character = await Character.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(character)
})

// @desc    Update character
// @route   PUT /api/character/:id
// @access  Private
const updateCharacter = asyncHandler(async (req, res) => {
  const character = await Character.findById(req.params.id)

  if (!character) {
    res.status(400)
    throw new Error('Character not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (character.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedCharacter)
})

// @desc    Delete character
// @route   DELETE /api/character/:id
// @access  Private
const deleteCharacter = asyncHandler(async (req, res) => {
  const character = await Character.findById(req.params.id)

  if (!character) {
    res.status(400)
    throw new Error('Character not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (character.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await chacter.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
}

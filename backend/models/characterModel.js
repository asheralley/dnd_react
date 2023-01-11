const mongoose = require('mongoose')

const characterSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    stats: {
      type: Array,
      "default": [],
      required: [true, 'Please add a text value'],
    },
    equipement: [
      {
        description: String,
        resistance: String,
      }
    ],
    leftHand: {
      type: String,
      baseDamage: String,
      bonus: String,
    },
    money: {
      type: Array,
      "default": [],
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Character', characterSchema)

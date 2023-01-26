const mongoose = require('mongoose')

const characterSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    characterName: {
      type: String
    },
    race: {
      type: String
    },
    class: {
      type: String
    },
    subClass: {
      type: String
    },
    mainStats: {
      strength: {type: Number},
      dexterity: {type: Number},
      constitution: {type: Number},
      intelligence: {type: Number},
      wisdom: {type: Number},
      charisma: {type: Number}
    },
    savingThrows: {
      strength: {type: Number},
      dexterity: {type: Number},
      constitution: {type: Number},
      intelligence: {type: Number},
      wisdom: {type: Number},
      charisma: {type: Number}
    },
    hp: {type: Number},
    tempHp: {type: Number},
    hitDice: {type: String},
    armourClass: {type: Number},
    deathSaves: {
      successes: {type: Number},
      fails: {type: Number}
    },
    abilitySlots: {
      level: {type: String},
      totalSlotNumber: {type: Number},
      used: {type: Number},
    },
    money: {
      GP: {type: Number},
      SP: {type: Number},
      Plt: {type: Number}
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Character', characterSchema)

const mongoose = require('mongoose')
const faveSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    url: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },

    explanation: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Favorites', faveSchema);

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
      require: [true, "Please add a url"],
    },
    description: {
      type: String,
      require: [true, "Please add a description"],
    },
    username: {
      type: String,
      require: [true, "Please add a username"],
    },
    explanation: {
        type: String,
        require: [true, "Please add an explanation"],
      },
  },
);

module.exports = mongoose.model('Favourites', faveSchema);

const mongoose = require('mongoose')
const faveSchema = mongoose.Schema(
  {
    user: {
      type: String,
      require: true,
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
  },
);

module.exports = mongoose.model('Favourites', faveSchema);

const { isURL } = require('validator');
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    link: {
      type: String,
      required: true,
      validate: [isURL, 'Некорректный URL адрес.'],
    },
    owner: {
      name: String,
      _id: String,
    },
    likes: [
      {
        name: String,
        _id: String,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('card', cardSchema);

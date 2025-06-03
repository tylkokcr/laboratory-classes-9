// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title:  { type: String, required: true },
    year:   { type: Number, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);

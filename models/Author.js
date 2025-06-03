// models/Author.js
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName:  { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Author', authorSchema);

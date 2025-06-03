// routes/bookRoutes.js
const express = require('express');
const router = express.Router();

// Buradaki yol, controllers klasöründeki bookControllers.js dosyasını işaret etmeli
const bookController = require('../controllers/bookControllers');

// GET /api/books
router.get('/', bookController.getAllBooks);

// POST /api/books
router.post('/', bookController.createBook);

// DELETE /api/books/:id
router.delete('/:id', bookController.deleteBook);

module.exports = router;

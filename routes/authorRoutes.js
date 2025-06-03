// routes/authorRoutes.js
const express = require('express');
const router = express.Router();

// Dosya adı authorControllers.js olduğu için "authorControllers" olarak require edin:
const authorController = require('../controllers/authorControllers');

router.get('/', authorController.getAllAuthors);
router.put('/:id', authorController.updateAuthor);

module.exports = router;

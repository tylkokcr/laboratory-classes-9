// controllers/bookControllers.js
const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
  try {
    // Burada Book.find fonksiyonu çağrılıyor; Book'un gerçekten bir model olduğundan emin olmalısınız
    const books = await Book.find().populate('author', 'firstName lastName');
    return res.status(200).json(books);
  } catch (err) {
    console.error('Error fetching books:', err);
    return res.status(500).json({ message: 'Sunucuda hata oluştu.' });
  }
};

exports.createBook = async (req, res) => {
  const { title, year, author } = req.body;
  try {
    const newBook = new Book({ title, year, author });
    const savedBook = await newBook.save();
    return res.status(201).json(savedBook);
  } catch (err) {
    console.error('Error creating book:', err);
    return res.status(500).json({ message: 'Sunucuda hata oluştu.' });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Book.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Kitap bulunamadı.' });
    }
    return res.sendStatus(204);
  } catch (err) {
    console.error('Error deleting book:', err);
    return res.status(500).json({ message: 'Sunucuda hata oluştu.' });
  }
};

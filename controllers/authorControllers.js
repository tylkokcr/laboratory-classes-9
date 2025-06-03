const Author = require('../models/Author');

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    return res.status(200).json(authors);
  } catch (err) {
    console.error('Error fetching authors:', err);
    return res.status(500).json({ message: 'Sunucuda hata oluştu.' });
  }
};

exports.updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  try {
    const updated = await Author.findByIdAndUpdate(
      id,
      { firstName, lastName },
      { new: true, runValidators: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'Yazar bulunamadı.' });
    }
    return res.status(200).json(updated);
  } catch (err) {
    console.error('Error updating author:', err);
    return res.status(500).json({ message: 'Sunucuda hata oluştu.' });
  }
};

// app.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");

dotenv.config();

const app = express();

// --- MIDDLEWARE ---
app.use(cors());          // Geliştirme aşamasında tüm origin’lere izin verir
app.use(express.json());  // JSON body parsing

// --- ROUTES ---
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);

// --- 404 HANDLER ---
app.use((req, res, next) => {
  res.status(404).json({ message: "API endpoint bulunamadı." });
});

// --- GLOBAL ERROR HANDLER ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Sunucuda beklenmedik bir hata oluştu." });
});

// --- MONGODB BAĞLANTISI VE SUNUCUYU BAŞLATMA ---
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB bağlantısı başarılı.");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB bağlantı hatası:", err);
    process.exit(1);
  });

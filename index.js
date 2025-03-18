// index.js
const express = require('express');
const app = express();

// 3000 portundan dinleme
const PORT = 3000;

// Basit bir GET endpoint:
app.get('/', (req, res) => {
  res.send('Merhaba Dünya! (Express.js çalışıyor)');
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor. http://localhost:${PORT} üzerinde dinleniyor...`);
});
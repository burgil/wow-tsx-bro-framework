const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const distDir = path.resolve(__dirname, '../dist');
app.use(express.static(distDir));
app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  console.log(`Serving files from ${distDir}`);
});
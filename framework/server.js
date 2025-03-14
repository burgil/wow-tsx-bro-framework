const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const distDir = path.resolve(__dirname, '../dist');

// Serve static files from the dist directory
app.use(express.static(distDir));

// Handle all routes and serve the index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  console.log(`Serving files from ${distDir}`);
});
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const path = require('path');
const fs = require('fs');

// Ensure dist directory exists
const distDir = path.resolve(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

console.log('Building application for production...');

// Create webpack compiler with production configuration
const compiler = webpack(webpackConfig({}, { mode: 'production' }));

// Run the compiler
compiler.run((err, stats) => {
  if (err) {
    console.error('Webpack compilation error:', err);
    process.exit(1);
  }

  console.log(stats.toString({
    chunks: false,
    colors: true
  }));

  if (stats.hasErrors()) {
    console.error('Build failed with errors.');
    process.exit(1);
  }

  console.log('Build completed successfully!');
  console.log(`Files output to: ${distDir}`);
  
  // Close the compiler
  compiler.close((closeErr) => {
    if (closeErr) {
      console.error('Error closing compiler:', closeErr);
      process.exit(1);
    }
  });
});
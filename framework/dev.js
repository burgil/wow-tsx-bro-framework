require('ts-node').register({
  transpileOnly: true,
  compilerOptions: {
    module: 'commonjs',
    jsx: 'react',
    jsxFactory: 'createElement'
  }
});

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const { createElement } = require('./runtime');

// Make createElement available globally
global.createElement = createElement;

const webpackConfig = require('./webpack.config');

const app = express();
const PORT = process.env.PORT || 3001;

// Create webpack compiler with development configuration
const config = webpackConfig({}, { mode: 'development' });
const compiler = webpack(config);

// Use webpack-dev-middleware with hot reload support
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  writeToDisk: false,
  stats: 'minimal'
}));

// Enable hot module replacement
app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

// Serve the index.html for all routes
app.get('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

// Start the development server
app.listen(PORT, () => {
  console.log(`Development server started on http://localhost:${PORT}`);
});
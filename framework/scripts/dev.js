const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const webpackConfig = require('../webpack.config');
const app = express();
const PORT = process.env.PORT || 2222;
const config = webpackConfig({}, { mode: 'development' });
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  writeToDisk: false,
  stats: 'minimal'
}));
app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));
app.get('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) return next(err);
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});
app.listen(PORT, () => {
  console.log(`Development server started on http://localhost:${PORT}`);
});
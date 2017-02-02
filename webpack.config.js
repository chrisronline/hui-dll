var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json')
var version = pkg.version;
var deps = Object.keys(pkg.dependencies);

deps.push('react-dom/server')

var entry = {};
entry['hui-vendor'] = deps

module.exports = {
  entry: entry,
  output: {
    library: `[name]`,
    libraryTarget: 'var',
    filename: `./dist/[name].js`
  },
  recordsPath: path.resolve(__dirname, './webpack.records'),
  plugins: [
    new webpack.DllPlugin({
      path: './dist/manifest.json',
      name: `[name]`,
    })
  ],
  node: {
    fs: 'empty',
    module: 'empty'
  }
};

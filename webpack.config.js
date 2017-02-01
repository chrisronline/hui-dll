var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json')
var version = pkg.version;
var deps = Object.keys(pkg.dependencies);

module.exports = {
  entry: {
    vendor: deps
  },
  output: {
    library: '[name]_[hash]',
    libraryTarget: 'var',
    filename: `./dist/[name]_${version}.js`
  },
  recordsPath: path.resolve(__dirname, './webpack.records'),
  plugins: [
    new webpack.DllPlugin({
      path: './dist/manifest.json',
      name: `[name]_${version}`,
    })
  ]
};

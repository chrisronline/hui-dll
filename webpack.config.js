var path = require('path');
var webpack = require('webpack');
var version = require('./package.json').version;

module.exports = {
  entry: {
    vendor: ['react', 'react-dom']
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

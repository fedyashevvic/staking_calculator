const path = require(`path`);
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: `development`,
  entry: path.join(__dirname, `./src/js/index.js`),
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `dist`)
  },
  devServer: {
    contentBase: path.join(__dirname, `dist`),
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader:'file-loader'
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
}
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin    = require("copy-webpack-plugin");


module.exports = {
  mode: 'development',

  output: {
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: false,
          minimize: false
        }
      },
      {
        test: /index.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.css$/i,
        exclude: /index.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   loader: 'file-loader'
      // }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),

    new MiniCssExtractPlugin(),

    // new CopyWebpackPlugin({
    //   patterns: [{ from: 'src/assets/', to: 'assets/'}],
    // }),

  ]
}

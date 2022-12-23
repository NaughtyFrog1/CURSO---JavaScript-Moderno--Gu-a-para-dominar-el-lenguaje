const HtmlWebpackPlugin    = require('html-webpack-plugin');      // Forma de node para cargar archivos de otros paquetes
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin    = require("copy-webpack-plugin");
const CssMinimizerPlugin   = require('css-minimizer-webpack-plugin');
const TerserPlugin         = require("terser-webpack-plugin");
const path = require('path');


module.exports = {
  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'docs/'),
    clean: true,  // eliminar carpeta dist al buildear
    filename: 'main.[contenthash].js',
  },

  module: {
    // Configuración del webpack
    rules: [
      // Sirven para decirle a webpack que hacer con ciertos tipos de archivos
      // Las reglas se ejecutan en el orden en el que se declaran. Si un archivo cumple con más de una regla, solo se le aplicara la regla que esta primero
      {
        test: /\.html$/i,       // Archivo con extensión .html
        loader: 'html-loader',   // Paquete importado con npm
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
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  optimization: {
    minimize : true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Archivo en el que se basa el archivo en el dist/
      filename: './index.html',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
      ignoreOrder: false,
    }),

    new CopyWebpackPlugin({
      patterns: [{ 
        from: 'src/assets/', 
        to: 'assets/',
        noErrorOnMissing: true
      }],
    }),

  ]
}

/**
 * Como usamos el webpack para importar los archivos js, borramos la importación
 * del index.js del index.html, ya que al ejecutar el script de webpack, este
 * se importará automaticamente
 */

/**
 * La aplicación, al estar importando módulos, debe funcionar a traves del
 * protocolo HTTP/HTTPS, no desde el archivo
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = (env, agrv) => {
  const isDev = agrv.mode === 'development'
  const basePlugins = [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/favicon.ico', to: '' },
        { from: 'public/manifest.json', to: '' },
        { from: 'public/robots.txt', to: '' }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : 'static/css/[name].[contenthash:6].css'
    })
  ]
  const prodPlugins = [
    ...basePlugins,
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      test: /\.(css|js|html|svg)$/
    })
  ]

  return {
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(s[ac]ss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: isDev ? true : false }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: isDev ? true : false }
            }
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: isDev ? '[path][name].[ext]' : 'static/fonts/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: isDev
                  ? '[path][name].[ext]'
                  : 'static/media/[name].[contenthash:6].[ext]'
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      alias: {
        '@': path.resolve('src'),
        '@@': path.resolve()
      }
    },
    output: {
      path: path.resolve('build'),
      publicPath: '',
      filename: 'static/js/main.[contenthash:6].js',
      environment: {
        arrowFunction: false,
        bigIntLiteral: false,
        const: false,
        destructuring: false,
        dynamicImport: false,
        forOf: false,
        module: false
      }
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
      contentBase: 'public',
      port: 3000,
      hot: true,
      watchContentBase: true,
      historyApiFallback: true
    },
    plugins: isDev ? basePlugins : prodPlugins
    // optimization: {
    //   minimize: true
    // }
  }
}

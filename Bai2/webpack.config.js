const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, agrv) => {
  const isDev = agrv.mode === 'development'
  return {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(s[ac]ss|css)$/,
          use: [
            'style-loader',
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
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            }
          ]
        }
      ]
    },
    resolve: { extensions: ['.js', '.jsx'] },
    output: {
      path: path.resolve('dist'),
      publicPath: '',
      filename: 'bundle.[hash:6].js'
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
      contentBase: 'public',
      port: 3000,
      hot: true,
      open: true,
      watchContentBase: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      })
    ]
  }
}

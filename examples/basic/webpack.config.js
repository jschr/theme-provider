const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const tsCompilerOptions = require('../../tsconfig.json').compilerOptions

tsCompilerOptions.declaration = false

module.exports = {
  devtool: 'source-map',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          compilerOptions: tsCompilerOptions
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true
    })
  ]
}
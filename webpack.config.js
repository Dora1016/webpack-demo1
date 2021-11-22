const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const base = require('./webpack.config.base.js') 

module.exports = {
    ...base, //意思是把base里面所有的属性放过来
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: "./dist"
    },
    module: {  
      rules: [
        ...base.module.rules,
      {
        test: /\.css$/i, 
        use: ["style-loader", "css-loader"]
        
      }],
    },
    
  };


  
  
  

var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist'
  },
  devServer:{
    overlay:true
},
  module: {
    rules: [{
      test: /\.js$/, 
      use: [
        {
          loader: 'babel-loader'
        }
      ],
      exclude: /node_modules/, 
    }]
  }
};

    

//引用path模組
const path = require('path');
const webpack = require('webpack');

module.exports = {
  //這個webpack打包的對象，這裡面加上剛剛建立的index.js
  entry: {
    'bundle.js': [
      path.resolve(__dirname, 'src/util.js'),
      path.resolve(__dirname, 'src/index.js')
    ]
  },
  output: {
    //這裡是打包後的檔案名稱
    filename: 'bundle.js',
    //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
    // path: path.resolve('./'),
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.ProvidePlugin({
      util: path.resolve(__dirname, 'src/util.js')
    })
  ]
};

module.exports = {
  devServer: {
    // vue client request to - '/api/states'
    // dev server request to - 'http://127.0.0.1:3000/api/states'
    proxy: 'http://127.0.0.1:3000'
  }
}
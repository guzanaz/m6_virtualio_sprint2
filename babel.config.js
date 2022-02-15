module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  devServer: {
    proxy: 'http://127.0.0.1:8000/',
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8081,
    public: 'http://192.168.1.130:8081/',
      headers: {
      'Access-Control-Allow-Origin': '*',
      },
    },
    publicPath: "/"
}


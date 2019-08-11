// vue.config.js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack:(config) => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://free-api.heweather.net/s6/weather',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'//请求的时候使用这个api就可以
        }
      },
      '/fix':{
        target: 'https://api.map.baidu.com/location/ip',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/fix':''
        }
      }
    }
  }
}

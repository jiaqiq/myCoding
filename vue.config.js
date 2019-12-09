const path = require('path')
const fs = require('fs')
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: 'dist', //打包输出目录默认dist
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
            config.resolve.alias['~'] = __dirname + path.join('/src/assets');
        }
    },
    chainWebpack: (config) => {
        //修改文件引入自定义路径
        config.resolve.alias
            .set('@', resolve('src'))
            .set('style', resolve('src/assets/style'))
            .set('components', resolve('src/components'))
            .set('common', resolve('src/common'))
            .set('api', resolve('src/api'))

    },
    devServer: {
        port: 9999, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        // proxy: {
        //     '/api': {
        //         target: '<url>',
        //         ws: true,
        //         changeOrigin: true
        //     },
        //     '/foo': {
        //         target: '<other_url>'
        //     }
        // },  // 配置多个代理
    }
}
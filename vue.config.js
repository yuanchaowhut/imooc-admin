const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const _defineConfig = defineConfig({
    transpileDependencies: true
})

// https://cli.vuejs.org/zh/guide/webpack.html#简单的配置方式
module.exports = {
    // publicPath: './', // 若想本地能访问静态资源则，则这里需要配置为相对路径
    ..._defineConfig,
    chainWebpack(config) {
        // 设置 svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/icons')) // 排除掉其他loader对svg处理
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    },
    // 解决报错：webpack ＜ 5 used to include polyfills for node.js core modules by default
    configureWebpack: {
        plugins: [new NodePolyfillPlugin()]
    },

    // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        host: 'localhost',
        port: 8700,
        hot: true,
        open: true, // 配置自动启动浏览器
        https: false, // https:{type:Boolean}
        proxy: {
            '/api': {
                target: 'http://localhost:8600',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/imooc'
                }
            }
        }
    }
}

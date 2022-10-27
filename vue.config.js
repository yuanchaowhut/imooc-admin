const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const _defineConfig = defineConfig({
    transpileDependencies: true
})

// https://cli.vuejs.org/zh/guide/webpack.html#简单的配置方式
module.exports = {
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
    }
}

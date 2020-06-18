const webpack = require('webpack')
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    runtimeCompiler: true,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('vue$', 'vue/dist/vue.esm.js')
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@scss', resolve('src/assets/scss'))
            .set('@components', resolve('src/components'))
            .set('@plugins', resolve('src/plugins'))
            .set('@router', resolve('src/router'))
            .set('@store', resolve('src/store'))
            .set('@views', resolve('src/views'));
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    }
}
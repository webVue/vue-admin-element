/** 
 * @author: 陈巧君
 * @date  : 2021-03-03 20:40:22
 */

const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
    //打包解决js css文件引入问题  部署应用包时的基本 URL Default: '/'
    publicPath: "./",

    // 去掉打包的map文件
    productionSourceMap: false,

    // 打包出来的上线目录 默认是dist
    outputDir: 'dist',

    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',

    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。 Default: 'index.html'
    indexPath: 'index.html',

    // 接口代理
    devServer: {
        // 代理多个请求
        proxy: {
            "/pc": {
                target: 'https://testyxqplatform.yuqianshu.com/',
                ws: true,
                changeOrigin: true,
            },
            "/order": {
                target: 'https://testyxqplatform.yuqianshu.com/',
                ws: true,
                changeOrigin: true,
            },
        },
        port: 8090
    },

    // 项目别名
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("services", resolve("src/services"))
            .set("components", resolve("src/components"))
            .set("views", resolve("src/views"))
            .set("chen", resolve("src/chen"))
            .set("store", resolve("src/store"))
            .set("router", resolve("src/router"))
    },
}
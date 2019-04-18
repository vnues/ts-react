const path = require('path')
const plugins = require('./plugins')
const { resolve } = require('./utils')
const styleRules = require('./rules/styleRules')
const jsRules = require('./rules/jsRules')
module.exports = {
    entry: {
        app: ['webpack-hot-middleware/client?path=__hmr', resolve('src/index.tsx')]
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@components': resolve('src/components'),
            '@utils': resolve('src/utils')
        }
    },
    module: {
        rules: [...styleRules, ...jsRules]
    },
    plugins: [...plugins]
}
//options配置选项
// loader 和 plugin 的主要区别：
// loader 用于加载某些资源文件。
// 因为 webpack 只能理解 JavaScript 和 JSON 文件，对于其他资源例如 css，图片，或者其他的语法集，比如 jsx， coffee，是没有办法加载的。 这就需要对应的loader将资源转化，加载进来。从字面意思也能看出，loader是用于加载的，它作用于一个个文件上。
// plugin 用于扩展webpack的功能。
// 它直接作用于 webpack，扩展了它的功能。当然loader也是变相的扩展了 webpack ，但是它只专注于转化文件（transform）这一个领域。而plugin的功能更加的丰富，而不仅局限于资源的加载。

const { resolve } = require('../utils')
const theme = require('../../theme')
module.exports = [
    {
        test: /\.scss$/,
        include: [resolve('src')],
        use: [
            'style-loader',
            //加缓存
            {
                loader: 'cache-loader',
                options: {
                    cacheDirectory: resolve('.cache-loader')
                }
            },
            {
                loader: 'typings-for-css-modules-loader',
                options: {
                    //是否使用 css modules
                    modules: true,
                    //类名导出
                    namedExport: true,
                    //支持驼峰
                    camelCase: true,
                    //是否使用sass
                    sass: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    includePaths: [resolve('src/static/css')]
                }
            }
        ]
    },
    {
        test: /\.less$/,
        include: [resolve('node_module')],
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'less-loader',
                options: {
                    //禁用在样式表写js代码
                    javascriptEnabled: true,
                    //更改主题色
                    modifyVars: theme
                }
            }
        ]
    }
]

const { resolve } = require('../utils')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = [
    {
        test: /\.ts(x?)$/,
        use: [
            {
                loader: 'awesome-typescript-loader',
                options: {
                    transpileOnly: true,
                    useCache: true,
                    useBabel: false,
                    cacheDirectory: resolve('.cache-loader'),
                    //配置react热更新
                    babelOptions: {
                        babelrc: false,
                        plugins: ['react-hot-loader/babel']
                    },
                    //按需加载
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                libraryName: 'antd',
                                libraryDirectory: 'lib',
                                style: true
                            })
                        ]
                    })
                }
            }
        ]
    }
]

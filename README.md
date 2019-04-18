# typescript-react 脚手架

## 前言

react 官方脚手架还没有支持 typescript 点写法，自己再配置一个 typescript+react 的脚手架吧

## 项目运行

```shell
git@github.com:vnues/ts-react.git

cd ts-react

yarn

npm run dev


```

## 说明

-   如果对您有帮助，您可以点右上角 "Star" 支持一下 十分感谢!
-   如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR

## 目标功能

-   [x] 支持 typescript 的写法
-   [x] antd 按需加载功能
-   [x] git 检测功能
-   [x] 热更新功能
-   [x] less|sass|css 模块化支持
-   [x] webpack 缓存功能
-   [ ] mock 数据支持
-   [ ] upload 上传到 cdn 功能

## 目录结构

```txt
.
├── README.md
├── build
│   ├── plugins.js
│   ├── rules
│   ├── tpl
│   ├── typings
│   ├── utils.js
│   └── webpack.config.js
├── package-lock.json
├── package.json
├── src
│   ├── components
│   ├── index.scss
│   ├── index.scss.d.ts
│   ├── index.tsx
│   ├── modules
│   ├── static
│   └── utils
├── theme.js
├── tsconfig.json
└── yarn.lock
```

### 关于 antd 按需加载的引入

```javascript
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
```

## 项目交流群

> QQ 群: 666512516

## 续

-   更多的功能后期还会陆续的补上.
-   更多的细节会陆续修复代码会陆续优化.
-   由于作者精力有限，后续可能只会修复某些 bug
-   秉着学习的态度,感谢大家.

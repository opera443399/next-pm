# how to write a morden web app

## things to learn

```bash
react
yarn
webpack
babel
@alifd/next
```

## 在 creat-react-app 中使用 @alifd/next

```bash
# sudo npm install -g create-react-app
# create-react-app next-pm
(omitted..)
Initialized a git repository.

Success! Created next-pm at /Users/pengchao/Documents/r/next-pm
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd next-pm
  yarn start

Happy hacking!

# cd next-demo
# yarn start

```

## 引入 @alifd/next 和 webpack,babel 相关依赖

```bash
yarn add @alifd/next
yarn add moment
yarn add -D style-loader css-loader sass-loader node-sass
yarn add -D webpack-cli webpack-merge webpack-dev-server clean-webpack-plugin html-webpack-plugin html-webpack-template
yarn add -D @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties
yarn add -D babel-plugin-import


```

## 配置 webpack 后的启动方式

```bash
yarn dev

```

## 参考

1. [阿里重磅开源中后台UI解决方案Fusion](https://mp.weixin.qq.com/s/1Z9_jeofzSK8drDTmW8kVQ)
2. [@alifd/next 快速上手](https://fusion.design/component/doc/105)
3. [在 creat-react-app 中使用 @alifd/next](https://fusion.design/component/doc/1324)
4. [webpack-Getting Started](https://webpack.js.org/guides/getting-started/)
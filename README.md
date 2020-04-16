# es6
### es6相关环境搭建
1. 安装babel
    > npm install --save-dev @babel/core
2. 配置.babelrc
    > 最新转码规则
    > npm install --save-dev @babel/preset-env,

    > react 转码规则
    > npm install --save-dev @babel/preset-react

    > presets字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。
3. 命令行转码
    > npm install --save-dev @babel/cli
    > 参见package.json的build, -s可以生成sourceMap
4. @babel/register模块改写require命令，为它加上一个钩子。此后，每当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用 Babel 进行转码。[todo]
    > npm install --save-dev @babel/register

    > 需要注意的是，@babel/register只会对require命令加载的文件转码，而不会对当前文件转码。另外，由于它是实时转码，所以只适合在开发环境使用
5. polyfill
    > npm install --save-dev core-js regenerator-runtime
6. 为了实现监听文件, 且实现自动刷新功能, 这里使用了webpack
    - 安装webpack webpack-cli, 3.x版本中, webpack和它的cli都在同一个包中, 4.x以后开始分开
    - 官网上不推荐全局安装, 因为锁定webpack版本后, 依赖不同版本webpack的项目可能构建失败
    - npm i webpack webpack-cli -D
    - npm i webpack-dev-server -D



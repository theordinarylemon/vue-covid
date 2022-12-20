# vue-covid

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

##
项目介绍
1.丁香医生疫情 移动端H5
2.腾讯疫情 结合

##项目准备工作
1.搭建项目依赖
vue create vue-covid(router)
cd vue-covid
clear    //清楚屏幕，window--cls

2.项目初始化
  1.css初始化      //在assets下，创建css文件夹，再创建reset.css

  2.移动端适配
  3.图标（confront）   //这个项目没有用到
  4.网络请求a axios
    npm i axios -S
    npm i querystring -S
  5.其他三方库
    npm i swiper -S
    npm i moment -S
  6.vant组件库
    js....
    npm i vant@latest-v2 -S
    npm i babel-plugin-import -D     //-D表示用在本地环境

    // For users who use babel7, that can be configured in babel.config.js
        module.exports = {
        plugins: [
            ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
            }, 'vant']
        ]
        };
        ....

    7.启动项目
      npm run serve

3.推送远程仓库

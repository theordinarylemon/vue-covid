## 项目介绍
1. 丁香医生疫情  移动端H5 
2. 腾讯疫情  结合

## 项目准备工作
1. 搭建项目 依赖
    vue create vue-yiqing (router)

2. 项目初始化
    1. css初始化 
    2. 移动端适配
    3. 图标（iconfont）
    4. 网络请求axios 
        npm i axios querystring -S
    5. 其他三方库
        npm i swiper -S 
        npm i moment -S 
    6. vant组件库 
        ```js
            npm i vant@latest-v2 -S
            npm i babel-plugin-import -D
            // 对于使用 babel7 的用户，可以在 babel.config.js 中配置
            module.exports = {
                plugins: [
                    ['import', {
                        libraryName: 'vant',
                        libraryDirectory: 'es',
                        style: true
                        }, 'vant']
                ]
            };
        ```

3. 推送远程仓库



## 首页


## 接口
    

## echarts 4.x
1. 图表工具  -- 柱状图 折线图 饼图 地图使用
2. 安装echarts  
    npm i echarts@4.x -S
 
3. vue中使用图表工具
    1. 组件内局部使用

    2. 全局注入
        ```js   
            //导入echarts 
            import echarts from 'echarts'
            Vue.prototype.$echarts= echarts
        ```
    3. 封装vue插件
    ```js
        vue封装插件语法：
            const install = function(Vue){
                Object.defineProperties(Vue.prototype,{
                    $myecharts :{
                        get(){
                            return {
                                line(){
                                    //-----
                                },
                                bar(){

                                }
                            }
                        }
                    }
                })

            }

        main.js 
            //导入echarts插件
            import echarts2 from './plugins/echarts'
            Vue.use(echarts2)
    ```
        
## echarts 5.x 
1. 终止项目ctrl+c  把node_modlues源码 map文件   
2. cnpm i echarts -S --force (--force强制安装模块 覆盖之前的模块)
3. 修改导入的模块信息
    import * as echarts from 'echarts';




    
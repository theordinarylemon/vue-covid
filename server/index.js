const express = require('express')
const app = express()
//导入
const chinaData = require('./data/chinaData')
const worldData= require('./data/worldData')
//配置路由
//1.国内疫情数据统计接口--------------------
app.get('/china',(req,res)=>{
    res.send(chinaData)
})

//2. 世界疫情接口----------------------------------
app.get('/world',(req,res)=>{
    res.send(worldData)
})

app.listen(8989,()=>{
    console.log(8989);
})
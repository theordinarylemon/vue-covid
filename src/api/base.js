//接口地址
// 天行数据-疫情信息接口--key
const key ='b5919dd6f573907e378d0a6be7a78ff3'
const base ={
    host:'https://api.inews.qq.com',//腾讯疫情域名
    covinfo:'https://apis.tianapi.com/ncov/index?key='+key,//天行数据-疫情信息接口
    newsWorld:'/newsqa/v1/automation/modules/list?modules=FAutoCountryConfirmAdd,WomWorld,WomAboard',//海外疫情
    china:'/api/china',//中国疫情
    world:'/api/world',//世界疫情
    ///newsqa/v1/query/inner/publish/modules/list?modules=chinaDayListNew,chinaDayAddListNew&limit=30
    chinaLine:"/newsqa/v1/query/inner/publish/modules/list?modules=chinaDayListNew,chinaDayAddListNew",//全国折线图
    //https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf
    cityInfo:'/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf',//全国城市疫情折现
    cityData:'/newsqa/v1/query/pubished/daily/list?limit=30',//城市折现
}

export default base
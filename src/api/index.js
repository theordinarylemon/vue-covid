//请求的方法
import base from "./base";
import axios from "../request/request";
const api = {
  /* 
        疫情信息接口
        get请求 
        key:b5919dd6f573907e378d0a6be7a78ff3
    */
  getCovInfo() {
    return axios.get(base.covinfo);
  },
  /* 
    海外疫情
        腾讯疫情
   */
  getNewsWorld() {
    return axios.post(base.host + base.newsWorld);
  },
  /* 
    中国疫情
  */
  getChina() {
    return axios.get(base.china);
  },

  /* 
    世界疫情
  */
  getWorld() {
    return axios.get(base.world);
  },
  /* 
    腾讯全国疫情折线图 chinaLine
    limit=30

  */
 getChinaLine(params){
  return axios.get(base.host+base.chinaLine,{params})
 },
 /* 
  省份折线图
 */
 getCityInfo(){
  return axios.post(base.host + base.cityInfo)
 },
 /* 
 城市疫情折线
  adCode=440100&
 */
getCityData(params){
  return axios.get(base.host+base.cityData,{params})
}
};

export default api;

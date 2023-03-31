import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'
import './vant'
Vue.config.productionTip = false
import api from './api'
Vue.prototype.$api = api;
//4.x 导入echarts 
// import echarts from 'echarts'
//5.x
import * as echarts from 'echarts'
Vue.prototype.$echarts= echarts

//导入echarts插件
import echarts2 from './plugins/echarts'
Vue.use(echarts2)
//导入全局的过滤器
import './utils/myFilter'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

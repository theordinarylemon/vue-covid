import Vue from 'vue'
//处理数字 > 0 补 +
Vue.filter('time',function(val){
    if(!val) return '0';
    val = val>0?'+'+val:val;
    return val;
})

//继续写


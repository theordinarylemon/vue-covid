<template>
  <div>
    <!-- 1.疫情图片 logo -->
    <img class="logo" src="../assets/images/logo.png" alt="">
    <!-- 2. 切换 -->
    <div class="nav">
        <div :class="{active:Comp=='Home'}" @click="changeNav(1)">国内疫情</div>
        <div :class="{active:Comp=='Guowai'}" @click="changeNav(2)">海外疫情</div>
    </div>
    <keep-alive>
        <component :is="Comp"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from './home/HomeView.vue'
import Guowai from './guowai/Index.vue'
export default {
    components:{
        Home,
        Guowai
    },
    data(){
        return {
            Comp:'Home'
        }
    },
    methods:{
        changeNav(num){
            if(num==1){
                this.Comp = 'Home';
            }else{
                this.Comp = 'Guowai';
            }
            
        }
    }
}
</script>

<style lang="less" scoped>
.logo{
  width: 100%;
}
.nav{
    display: flex;
    // padding: .2rem;
    line-height: .4rem;
    position: relative;
    z-index: 1;
    background: #fff;
    border-radius: 0.2rem 0.2rem 0 0;
    // margin-top: -.2rem;
    margin-top: -0.2rem;
    overflow: hidden;
    >div{
        flex: 1;
        text-align: center;
        padding: .2rem;
        font-size: 0.34rem;
    }
    .active{
        color: #005dff;
    }
}
</style>

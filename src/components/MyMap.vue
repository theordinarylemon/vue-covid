<template>
    <div>
      <div class="title">
          <div class="hot">{{title}}</div>
      </div>
      <!-- 按钮 -->
     <div  class="btn">
          <van-button :type="info" size="mini" @click="changeMap(1)">现有确诊</van-button>
          <van-button :type="info2" size="mini" @click="changeMap(2)">累计确诊</van-button>
     </div>
      <!-- 中国地图 -->
      <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
      <div :id="main" style="width:7.5rem;height:7rem;"></div>
  
    </div>
  </template>
  
  <script>
  export default {
    //接受父组件参数
    props:['title','curConfirm','confirm','main'],
      data(){
          return{
              info:'info',
              info2:'default',
          }
      },
      methods:{
          changeMap(val){
              if(val==1){
                  this.info='info'
                  this.info2='default'
                  this.$emit('changeTabMap',this.curConfirm)
                //   this.$myecharts.chinaMap('main',this.curConfirm)
              }else{
                  this.info2='info'
                  this.info='default'
                //   this.$myecharts.chinaMap('main',this.confirm)
                this.$emit('changeTabMap',this.confirm)
              }
          }
      },
      mounted(){
         
         
      }
  }
  </script>
  
  <style lang="less" scoped>
     .title{
          margin: 0.2rem;
          display: flex;
          &::before{
              content: "";
              // position: absolute;
              width: 0.1rem;
              height: 0.32rem;
              margin-top: 0.05rem;
              background: #4169e2;
          }
          .hot{
              margin-left: 0.14rem;
          }    
      }
  .btn{
      margin: .2rem;
  }
  </style>
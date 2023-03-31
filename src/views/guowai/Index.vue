<template>
  <div>
   <div class="time">统计截止：{{WomWorld.lastUpdateTime}}</div>
   <div class="box">
    <van-row>
        <van-col span="6">
            <p>较昨日<span class="num">{{WomWorld.nowConfirmAdd |num}}</span></p>
            <p class="num big">{{WomWorld.nowConfirm}}</p>
            <p>现有确诊</p>
        </van-col>
        <van-col span="6">
            <p>较昨日<span class="num">{{WomWorld.confirmAdd |num}}</span></p>
            <p class="num big">{{WomWorld.confirm}}</p>
            <p>累计确认</p>
        </van-col>
        <van-col span="6">
            <p>较昨日<span class="num">{{WomWorld.healAdd |num}}</span></p>
            <p class="num big">{{WomWorld.heal}}</p>
            <p>累计治愈</p>
        </van-col>
        <van-col span="6">
            <p>较昨日<span class="num">{{WomWorld.deadAdd | num}}</span></p>
            <p class="num big">{{WomWorld.dead}}</p>
            <p>累计死亡</p>
        </van-col>
       
    </van-row>
   </div>

   <div class="title">海外疫情</div>
   <div class="wrapper">
        <div class="th">
            <van-sticky>
                    <van-row>
                        <van-col span="4">地区</van-col>
                        <van-col span="5">新增确诊</van-col>
                        <van-col span="6">累计确诊</van-col>
                        <van-col span="6">治愈</van-col>
                        <van-col span="3">死亡</van-col>
                    </van-row>
            </van-sticky>
        </div>
       <div class="list">
         <!-- 渲染内容 -->
         <van-row v-for="(item,index) in WomAboard" :key="index">
            <van-col span="4" class="left">{{item.name}}</van-col>
            <van-col span="5">{{item.confirmAdd}}</van-col>
            <van-col span="6">{{item.confirm}}</van-col>
            <van-col span="6">{{item.heal}}</van-col>
            <van-col span="3">{{item.dead}}</van-col>
        </van-row>
       </div>

   </div>

  </div>
</template>

<script>
export default {
    data(){
        return {
            WomWorld:{},
            WomAboard:[]
        }
    },  
    created(){
        this.$api.getNewsWorld()
        .then(res=>{
            console.log('----海外疫情----',res.data);
            this.WomWorld = res.data.data.WomWorld;
            this.WomAboard = res.data.data.WomAboard;
        })
    },
    filters:{
        num(val){
            return val = val>0?'+'+val:val;
        }
    }
}
</script>

<style lang="less" scoped>
    .time{
        margin: 0.24rem;
        font-size: .2rem;
        color: #666;
    }
.box{
    margin: 0.2rem 0.3rem;
    text-align: center;
    .van-col{
            margin-bottom: .2rem;
            font-size: .18rem;
            border-radius: .08rem;
            position: relative;
            >p{
                color: #333;
            }
            &::after{
                content: "";
                position: absolute;
                right: 0;
                top: 0;
                border-right: 0.02rem solid #fff;
                height: 100%;
            }
        }

        .big{
            font-size: .28rem;
            font-weight: bold;
        }
        .van-col:nth-child(1){
            background: #fff8f8;
            .num{
                color:#e61c1d;
            }
        }
        .van-col:nth-child(2){
            background: #fff4f4;
            .num{
                color: #be2121;
            }
        }
        .van-col:nth-child(3){
            background: #f1f8f4;
            .num{
                color: #178b50;
            }
        }
        .van-col:nth-child(4){
            background: #f3f6f8;
            .num{
                color: #4e5a65;
            }
        }
}
.title{
    margin: 0.2rem;
    font-size: .3rem;
    font-weight: bold;
}
.wrapper{
    margin: 0.2rem;
    .van-row{
        text-align: center;
        display: flex;
        align-items:center;
        min-height: .8rem;
        font-size: .24rem;
        color: #333;
    }
    .list{
        .left{
            text-align: left;
            padding-left: .1rem;
        }
        .van-row{
            border-bottom: 1px solid #eee;
        }
    }
    .th{
        .van-col{
            height: .8rem;
            line-height: .8rem;
        }
        .van-col:nth-child(1){
            background: #eee;
        }
        .van-col:nth-child(2){
            background: rgb(232, 190, 190);
        }
        .van-col:nth-child(3){
            background: rgb(86, 167, 214);
        }
        .van-col:nth-child(4){
            background: rgb(250, 166, 166);
        }
        .van-col:nth-child(5){
            background: rgb(158, 147, 120);
        }
    }
    
}
</style>
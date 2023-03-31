<template>
  <div class="main">
        <div class="title">
            <div class="hot">国内数据</div>
        </div>
        <div class="time">截至{{covData.modifyTime | time }}全国数据统计</div>
        <div class="content">
            <van-row>
                <van-col span="8">
                    <p>较昨日<span class="num">{{covData.currentConfirmedIncr | number}}</span></p>
                    <p class="num big">{{covData.currentConfirmedCount | num}}</p>
                    <strong>现存确诊</strong>
                </van-col>
                <van-col span="8">
                    <p>较昨日<span class="num">{{covData.suspectedIncr | number}}</span></p>
                    <p class="num big">{{covData.suspectedCount | num}}</p>
                    <strong>境外输入</strong>
                </van-col>
                <van-col span="8">
                    <p>较昨日<span class="num">{{covData.seriousIncr |number}}</span></p>
                    <p class="num big">{{covData.seriousCount | num}}</p>
                    <strong>现存无症状</strong>
                </van-col>
                <van-col span="8">
                    <p>较昨日<span class="num">{{covData.confirmedIncr | number}}</span></p>
                    <p class="num big">{{covData.confirmedCount | num}}</p>
                    <strong>累计确诊</strong>
                </van-col>
                <van-col span="8">
                    <p>较昨日<span class="num">{{covData.deadIncr | number}}</span></p>
                    <p class="num big">{{covData.deadCount | num}}</p>
                    <strong>累计死亡</strong>
                </van-col>
                <van-col span="8">
                    <p>较昨日<span class="num">{{covData.curedIncr | number}}</span></p>
                    <p class="num big">{{covData.curedCount | num}}</p>
                    <strong>累计治愈</strong>
                </van-col>
               
            </van-row>
        </div>

  </div>
</template>

<script>
import moment from 'moment'
export default {
    props:['covData'],
    filters:{
        //处理日期格式
        time(val){
            // if(!val) return '';
            return  moment(val).format('YYYY/MM/DD HH:mm:ss');
        },
        number(val){
            val = val>0?'+'+val:val;
            return val
        },
        num(val){
            if(!val) return '';
            //1. 转字符串 字符串处理 2. toLocaleString() 
            return val.toLocaleString();
        }
    }

    /**
            currentConfirmedCount 现存确诊
            confirmedCount  累计确诊
            suspectedCount  累计境外输入人数
            curedCount    累计治愈人数
            deadCount   累计死亡人数
            seriousCount  现存无症状人数
            suspectedIncr  新增境外输入人数
            currentConfirmedIncr   相比昨日现存确诊人数
            confirmedIncr  相比昨日累计确诊人数
            curedIncr   相比昨日新增治愈人数
            deadIncr  相比昨日新增死亡人数
            seriousIncr 相比昨日现存无症状人数

              modifyTime 时间
             
             */
}
</script>

<style scoped lang="less">
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
    .time{
        font-size: 0.28rem;
        color: #999;
        margin-left: .2rem;
    }
    .content{
        margin: 0.3rem;
        box-shadow: 0 0 5px rgba(0,0,0,.1);
        border-radius: .08rem;
        text-align: center;
        padding-top: .2rem;
        .van-col{
            margin-bottom: .2rem;
            >p{
                color: #333;
            }
        }

        .big{
            font-size: .36rem;
            font-weight: bold;
        }
        .van-col:nth-child(1){
            .num{
                color: red;
            }
        }
        .van-col:nth-child(2){
            .num{
                color: green;
            }
        }
        .van-col:nth-child(3){
            .num{
                color: palevioletred;
            }
        }
        .van-col:nth-child(4){
            .num{
                color: orange;
            }
        }
        .van-col:nth-child(5){
            .num{
                color: skyblue;
            }
        }
        .van-col:nth-child(6){
            .num{
                color: rgb(172, 172, 5);
            }
        }
    }
</style>

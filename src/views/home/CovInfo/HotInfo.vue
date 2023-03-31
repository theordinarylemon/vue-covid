<template>
  <div>
    <div class="title">
        <img class="hot" src="../../../assets/images/hot.png" alt=""/>
       <div class="more">
        <a href="##">查看更多</a>
       </div>
    </div>
    <ul  class="list">
        <li v-for="item in news" :key="item.id">
            <van-row>
                <van-col span="3"><span class="red">最新</span></van-col>
                <van-col span="19">{{item.title}}</van-col>
                <van-col span="2"><van-icon color="#aaa" name="arrow" /></van-col>
            </van-row> 
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props:['news']
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
            width: 1.4rem;
            margin-left: 0.14rem;
            height: 0.48rem;
        }
        .more{
            flex: 1;
            text-align: right;
        }
    }
    .list{
        margin: 0.2rem;
        border-bottom: 1px solid #eee;
        li{
            padding-bottom: 0.1rem;
            font-size: .3rem;
            margin-bottom: .2rem;
            line-height: .4rem;
            color: #1a1a1a;
        }
        .red{
            display: inline-block;
            background: #ff5555;
            padding: 0.02rem 0.04rem;
            color: #fff;
            font-size: .26rem;
            border-radius: 0.02rem;
        }
    }
</style>
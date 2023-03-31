<template>
  <div>
    <div class="title">
        <div class="hot">国内疫情分布</div>
    </div>
    <!-- 按钮 -->
   <div  class="btn">
        <van-button :type="info" size="mini" @click="changeMap(1)">现有确诊</van-button>
        <van-button :type="info2" size="mini" @click="changeMap(2)">累计确诊</van-button>
   </div>
    <!-- 中国地图 -->
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="main" style="width:7.5rem;height:7rem;"></div>


    <!-- --------------------------------------- -->
    <div class="title">
        <div class="hot">世界疫情分布</div>
    </div>
    <!-- 按钮 -->
   <div  class="btn">
        <van-button :type="info" size="mini" @click="changeWolrdMap(1)">现有确诊</van-button>
        <van-button :type="info2" size="mini" @click="changeWolrdMap(2)">累计确诊</van-button>
   </div>
    <div id="main2" style="width:7.5rem;height:7rem;"></div>

    
  </div>
</template>

<script>
export default {
    data(){
        return{
            info:'info',
            info2:'default',
            curConfirm:[],//现有
            confirm:[],//累计
            worldCurConfirm:[],
            worldConfirm:[]
        }
    },
    methods:{
        changeMap(val){
            if(val==1){
                this.info='info'
                this.info2='default'
                this.$myecharts.chinaMap('main',this.curConfirm)
            }else{
                this.info2='info'
                this.info='default'
                this.$myecharts.chinaMap('main',this.confirm)
            }
        }
    },
    mounted(){
        //获取地图的数据信息---------------------------------------------
        this.$api.getChina()
        .then(res=>{
            console.log('中国疫情----',res.data);
            let data = res.data.retdata;
            //现有确诊
            let arr=[];
            data.forEach(ele => {
                let obj={}
                obj.name=ele.xArea;
                obj.value=ele.curConfirm;
                arr.push(obj)
            });
            //累计确诊
            let arr2=[];
            data.forEach(ele => {
                let obj={}
                obj.name=ele.xArea;
                obj.value=ele.confirm;
                arr2.push(obj)
            });
            this.confirm=arr2;
            this.curConfirm=arr;
            // console.log('arr----',arr,arr2);
             //获取地图  [{name:'',value:''}]
            this.$myecharts.chinaMap('main',arr)
        })
        // //获取地图  [{name:'',value:''}]
        // this.$myecharts.chinaMap('main',[])
        

        //-----世界地图----------------------------------------------------
        this.$api.getWorld()
        .then(res=>{
            console.log('----世界地图-------',res.data);
            let data = res.data.retdata;
            //现有确诊
            let arr=[];
            data.forEach(ele => {
                let obj={}
                obj.name=ele.xArea;
                obj.value=ele.curConfirm;
                arr.push(obj)
            });
            //累计确诊
            let arr2=[];
            data.forEach(ele => {
                let obj={}
                obj.name=ele.xArea;
                obj.value=ele.confirm;
                arr2.push(obj)
            });
            this.worldConfirm=arr2;
            this.worldCurConfirm=arr;
            this.$myecharts.worldMap('main2',arr)
        })
       
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
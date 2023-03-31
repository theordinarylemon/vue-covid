<template>
    <div class="citys">
        <!-- getCityInfo -->
        <h3>国内31省市区本土疫情速报</h3>
        <div class="nav">
            <van-row>
                <van-col span="7">地区</van-col>
                <van-col span="3">本土确诊</van-col>
                <van-col span="4">本土<br/>无症状</van-col>
                <van-col span="4">高风险地区</van-col>
                <van-col span="6">更新<br/>时间</van-col>
            </van-row>
        </div>
        <div class="content">
            <div v-for="(item,index) in cityList" :key="index" class="line">
                <van-row @click="changeLine(index,item.adcode)">
                    <van-col span="7" class="cityname">
                        {{item.city}}
                        <span v-if="!(item.city==item.province)">{{item.province}}</span>
                    </van-col>
                    <van-col span="3">{{item.local_confirm_add | time}}</van-col>
                    <van-col span="4">{{item.local_wzz_add | time}}</van-col>
                    <van-col span="4">{{item.highRiskAreaNum}}</van-col>
                    <van-col span="6">今日 {{item.mtime | mydate}}</van-col>
                </van-row>
                <!-- 图表 -->
                <div v-if="index==num" class="tubiao">
                    <h4> {{item.city}}图表</h4>
                    <div id="item" style="width:7rem;height:3.6rem;"></div>
                </div>
            </div>
        </div>
        <div v-if="flag" class="more" @click="getMore">获取更多</div>
        <div v-else class="more" @click="getMore2">点击收起</div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data(){
        return{
            cityList:[],//默认城市省份
            list:[],//所有城市省份
            page:25,
            flag:true,
            num:0,//控制图表显示的容器div
            prevIndex:0//记录点击的上一次的index
        }
    },
    created(){
        this.getCityInfo();
    },
    methods:{
        //点击row显示下面的图表容器----------------------------
       async changeLine(index,adCode){
        if(this.prevIndex==index){
            this.num = 'a';
            console.log('重复点击隐藏------');
            this.prevIndex='a';
            return ;
        }
        this.prevIndex=index;
        
        console.log('index------',index);
            this.num = index;
            //获取数据---------------------
            let res = await this.$api.getCityData({adCode})
            console.log('获取-----省份的数据-',res.data); 
            let arr = res.data.data;
            let xData=[]
            let yData=[]
            arr.forEach(ele => {
                xData.push(ele.date)
                yData.push(ele.confirm_add)
            });
            //绘制折线图
            this.$myecharts.line('item',xData,yData)
        },  
        //点击获取更多城市数据----------------------
        getMore(){
            this.page++;
            console.log(this.page);
            //判断获取所有的数据---终点----list长度 ---  271 
            let max=Math.ceil( (this.list.length -5) /10)
            if(this.page >max){
                this.flag=false;
                return '';
            }
            this.cityList = this.list.slice(0,5+this.page*10)
        }, 
        getMore2(){
            this.cityList =this.list.slice(0,5);
            this.flag=true;
            this.page=0;
        } , 
        //获取城市数据---------------------------
        async getCityInfo(){
            let res = await this.$api.getCityInfo()
            let list=res.data.data.localCityNCOVDataList;
            console.log('---省份数据-------',list);//271条数据
            //视图渲染--多个5个  点击获取更多
            this.cityList = list.slice(0,5);
            this.list = list;
            ///获取第一个省份的数据--广州------list[0].adcode 
            let resCity = await this.$api.getCityData({adCode:list[0].adcode})  
            console.log('获取第一个省份的数据-',resCity.data); 
            let arr = resCity.data.data;
            let xData=[]
            let yData=[]
            arr.forEach(ele => {
                xData.push(ele.date)
                yData.push(ele.confirm_add)
            });
            //绘制折线图
            this.$myecharts.line('item',xData,yData)
        },
        //获取第一个省份的数据--广州-------------------------
        // async getCityData(){
        //     let res = await this.$api.getCityData({})
        // } 
    },
    //日期处理格式---------------
    filters:{
        mydate(val){
            if(!val) return '';
            return moment(val).format("HH:mm")
        }
    }

}
</script>

<style lang="less" scoped>
.citys {
    margin: .2rem;
    color: #333;
    .nav{
        margin-top: .2rem;
        .van-col{
            height: .88rem;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 0.1rem;
            background: #eee;
            border-right: 1px solid #fff;
            text-align: center;
        }
    }

    .content{
        font-size: .24rem;
        .van-col{
            // line-height: 0.6rem;
            min-height: .6rem;
            display: flex;
            align-items: center;
            // justify-content: center;
          
            text-align: center;
        }
        .line{
            border-bottom: 1px solid #eee;
            .tubiao{
                border: 1px solid #eee;
                border-radius: .1rem;
                padding: .1rem;
                margin-bottom: .1rem;
                h4{
                    margin-bottom: .1rem;
                }
            }
        }
        .cityname{
            text-align: left;
            span{
                color: #888;
                padding-left: .08rem;
            }
        }
    }

    .more{
        margin: 0.2rem;
        text-align: center;
    }
}
</style>
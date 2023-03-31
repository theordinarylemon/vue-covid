<template>
  <div class="home">

    <!-- 2.疫情热点 -->
    <HotInfo :news="news"></HotInfo>
    <!-- 3. 疫情-小导航 -->
    <div class="list">
      <div>
        <img src="../../assets/images/1.png" alt="" />
        <div>风险地区</div>
      </div>
      <div>
        <img src="../../assets/images/2.png" alt="" />
        <div>核算检测</div>
      </div>
      <div>
        <img src="../../assets/images/3.png" alt="" />
        <div>防疫物资</div>
      </div>
      <div>
        <img src="../../assets/images/4.png" alt="" />
        <div>出行政策</div>
      </div>
    </div>

    <!-- 4. 国内数据 -->
    <CovNumber :covData="covData"></CovNumber>
    <!-- 6. 全国疫情折线图 -->
    <CovLine></CovLine>
    <!-- 7. 城市疫情折现 -->
    <CovCity></CovCity>

    <!-- 5. 全国疫情分布 -->
    <!-- <ChinaMap></ChinaMap> -->
    <MyMap title="国内疫情分布" main="main1" :confirm="confirm" :curConfirm="curConfirm" @changeTabMap="changeTabMap"></MyMap>
    <MyMap title="世界疫情分布" main="main2" :confirm="worldConfirm" :curConfirm="worldCurConfirm" @changeTabMap="changeTabMap2"></MyMap>


  </div>
</template>
<script>
import HotInfo from './CovInfo/HotInfo.vue'
import CovNumber from './CovInfo/CovNumber.vue'
import ChinaMap from './VueMap/ChinaMap.vue'
import MyMap from '@/components/MyMap.vue'
import CovLine from './CovLine/CovLine.vue'
import CovCity from './CovCity/CovCity.vue'
export default {
  name: 'HomeView',
  components: {
    HotInfo,
    CovNumber,
    ChinaMap,
    MyMap,
    CovLine,
    CovCity
  },
  data() {
    return {
      news: [],
      covData: {},
      confirm: [],
      curConfirm: [],
      worldConfirm: [],
      worldCurConfirm: []
    }
  },
  //生命周期函数------------------------------
  created() {
    //-----疫情信息------------------------------------
    this.getCovInfo();
    //中国
    this.getChinaInfo();
    //世界
    this.getWorldInfo()

  },
  methods: {
    changeTabMap(val) {
      this.$myecharts.chinaMap('main1', val)
    },
    changeTabMap2(val){
      this.$myecharts.worldMap('main2', val)
    },
    //-----疫情信息------------------------------------
    async getCovInfo() {
      let res = await this.$api.getCovInfo();
      console.log(res.data);
      // console.log(res.data.result.news);
      //1. 疫情热点新闻信息
      this.news = res.data.result.news;
      //2. 国内疫情数据统计
      let data = res.data.result.desc;
      console.log(data);
      this.covData = data
    },
    //----国内疫情数据--------------------------------
    async getChinaInfo() {
      let res = await this.$api.getChina();
      console.log('中国疫情----', res.data);
      let data = res.data.retdata;
      //现有确诊
      let arr = [];
      data.forEach(ele => {
        let obj = {}
        obj.name = ele.xArea;
        obj.value = ele.curConfirm;
        arr.push(obj)
      });
      //累计确诊
      let arr2 = [];
      data.forEach(ele => {
        let obj = {}
        obj.name = ele.xArea;
        obj.value = ele.confirm;
        arr2.push(obj)
      });
      this.confirm = arr2;
      this.curConfirm = arr;
      this.$myecharts.chinaMap('main1', arr)
    },
    //----世界疫情数据--------------------------------
    async getWorldInfo() {
      let res = await this.$api.getWorld();
      console.log('世界疫情----', res.data);
      let data = res.data.retdata;
      //现有确诊
      let arr = [];
      data.forEach(ele => {
        let obj = {}
        obj.name = ele.xArea;
        obj.value = ele.curConfirm;
        arr.push(obj)
      });
      //累计确诊
      let arr2 = [];
      data.forEach(ele => {
        let obj = {}
        obj.name = ele.xArea;
        obj.value = ele.confirm;
        arr2.push(obj)
      });
      this.worldConfirm = arr2;
      this.worldCurConfirm = arr;
      this.$myecharts.worldMap('main2', arr)
    },
  }

}
</script>
<style lang="less" scoped>
.logo {
  width: 100%;
}

.list {
  display: flex;
  padding-bottom: 0.2rem;

  >div {
    flex: 1;
    text-align: center;
    color: #666;

    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
</style>

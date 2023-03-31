<template>
    <div class="china">
        <!-- getChinaLine limit=30 -->
        <van-tabs v-model="active" animated @click="onClick">
            <van-tab title="本土确诊" name="1">
                <h4>全国新增本土确诊</h4>
                <div id="tab1" style="width:7rem;height:4rem;"></div>
            </van-tab>
            <van-tab title="本土无症状" name="2">
                <h4>全国新增本土无症状</h4>
                <div id="tab2" style="width:7rem;height:4rem;"></div>
            </van-tab>
            <van-tab title="本土确诊" name="3">
                <h4>全国现有本土确诊</h4>
                <div id="tab3" style="width:7rem;height:4rem;"></div>
            </van-tab>
            <van-tab title="本土无症状" name="4">
                <h4>全国现有本土无症状</h4>
                <div id="tab4" style="width:7rem;height:4rem;"></div>
            </van-tab>
        </van-tabs>

    </div>
</template>

<script>
export default {
    data() {
        return {
            active: '1',
            xData: [],
            yData2: [],
            yData3: [],
            yData4: [],
        };
    },
    mounted() {
        //vue提供 延迟加载  等DOM元素加载完毕后 再去执行
        // this.$nextTick(() => {
        //     //    console.log( document.getElementById('tab1'));
        //     this.$myecharts.line('tab1')
        // })
        // this.$myecharts.line('tab1')

        this.getChinaLine();
    },
    methods: {
        //切换tabs标签的时候
        onClick(name, title) {
            console.log(name, title);
            if (name == 2) {
                this.$nextTick(() => {
                    this.$myecharts.line('tab2', this.xData, this.yData2)
                })
            } else if (name == 3) {
                this.$nextTick(() => {
                    this.$myecharts.line('tab3', this.xData, this.yData2)
                })
            } else if (name == 4) {
                this.$nextTick(() => {
                    this.$myecharts.line('tab4', this.xData, this.yData2)
                })
            }
        },
        async getChinaLine() {
            let res = await this.$api.getChinaLine({
                limit: 30
            })
            console.log('全国疫情折线图---', res.data.data.chinaDayAddListNew);
            let list = res.data.data.chinaDayAddListNew;
            //新增本地确诊
            let xData = []
            let yData = [];//本土确诊
            let yData2 = [];//本土无症状
            let yData3 = [];//现有本土确诊
            let yData4 = [];//现有本土无症状

            list.forEach(ele => {
                xData.push(ele.date);
                yData.push(ele.localConfirmadd)
                yData2.push(ele.localinfectionadd)
                yData3.push(ele.confirm)
                yData4.push(ele.importedCase)
            });
            //存储数据
            this.xData = xData;
            this.yData2 = yData2;
            this.yData3 = yData3;
            this.yData4 = yData4;
            //渲染图表
            this.$nextTick(() => {
                //    console.log( document.getElementById('tab1'));
                this.$myecharts.line('tab1', xData, yData)
                // this.$myecharts.line('tab2',xData,yData2)
            })

        }
    }
}
</script>

<style scoped  lang="less">
.china {
    margin: .2rem;

    .van-tabs {
        height: 5rem;
    }

    /deep/ .van-tabs--line .van-tabs__wrap {
        height: 44px;
        position: absolute;
        bottom: 0;
        width: 100%;
        .van-tabs {
            background: #eee;
            border-radius: 0.2rem;
            margin: 0 0.08rem;
        }
      
    }
}

.tab-box {
    // border: 1px solid #eee;
    // border-radius: .1rem;
}
</style>
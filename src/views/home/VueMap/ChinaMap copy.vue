<template>
  <div>
    <!-- 2. 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 7.5rem;height:6rem;"></div>
    <div id="main2" style="width: 7.5rem;height:6rem;"></div>
    <div id="main3" style="width: 7.5rem;height:8rem;"></div>
  </div>
</template>

<script>
//1. 导入echarts模块
// import echarts from 'echarts'
import * as echarts from 'echarts'
export default {
    mounted(){
        //3. echarts图表数据渲染 
        this.getEcharts();
        this.getGlobalEcharts();
        console.log('===================',this);
        console.log(this.$myecharts);
        this.$myecharts.line('main2')
        this.$myecharts.chinaMap('main3')
    },
    methods:{  
        //基本的echarts使用的参数说明--------------------------------------   
        getEcharts(){
            // 基于准备好的dom，初始化echarts实例
            console.log('--------------',echarts);
            var myChart = echarts.init(document.getElementById('main'));
            // 指定图表的配置项和数据
            var option = {
                title: {//标题组件，包含主标题和副标题。
                    text: 'ECharts 入门示例',//主标题文本，支持使用 \n 换行
                    link:'http://www.baidu.com',//主标题文本超链接
                    show:false,//是否显示标题组件
                    textStyle:{//
                        color:'red',//主标题文字的颜色
                    }
                },
                tooltip: {//提示框组件
                    trigger:'axis',//触发类型
                    //1.字符串写法 折线（区域）图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
                    // formatter:'{a}<br/>{b}-{c}', 
                    // formatter:'{a0}-{b0}-{c0}<br/>{a1}-{b1}:{c1}' 
                },
                legend: {//展现了不同系列的标记
                    textStyle:{
                        color:'orange'
                    },
                    icon:'circle',
                    data:['销量',{name:'金额',// 设置文本为红色
                            textStyle: {
                                color: 'red'
                            }}]
                },
                xAxis: {//x轴
                    // boundaryGap:false,//留白取消 从0点开始 适合折现
                    axisTick:{//刻度
                        alignWithLabel:true,//boundaryGap:true
                    },
                    axisLine:{//刻度线
                        lineStyle:{
                            color:'green'
                        }
                    },
                    // axisLabel:{//标签
                    //     color:'blue'
                    // },
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {//y轴

                },
                series: [//系列列表。每个系列通过 type 决定自己的图表类型
                    {
                        name: '销量',
                        type: 'line',//bar 柱状图 line 折线图 pie饼图  map地图
                        label:{
                            show:true,//是否显示标签
                            // position: 'top'
                        },
                        smooth:true,//是否平滑曲线显示。
                        itemStyle:{
                            color:'pink',//柱条的颜色
                            barBorderRadius:30,
                        },
                        emphasis:{//高亮的图形样式和标签样式。
                            label:{
                                // show:true
                            },
                            itemStyle:{
                                color:'orange'
                            }
                        },
                        data: [5, 20, 36, 10, 10, 20]
                    },
                // {
                //     name: '金额',
                //     type: 'bar',
                //     data: [50, 120, 136, 70, 30, 80]
                // }
            ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        //使用全局的echarts 
        getGlobalEcharts(){
            var myChart = this.$echarts.init(document.getElementById('main'));
            console.log(myChart);
        }
    }
}
</script>

<style>

</style>
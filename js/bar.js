// 基于准备好的dom，初始化echarts实例

var myChart = echarts.init(document.getElementById('main'));
            // 指定图表的配置项和数据
            var option = {
                backgroundColor: 'rgba(255,255,255,0)',
                title: {
                    text: '',
                    left: 'center'
                },
                xAxis: {
                    type: 'category',
                    // data: []
                },
                yAxis: {
                    type: 'value'
                },
                toolbox: {
                    feature: {
                        saveAsImage: { backgroundColor: 'rgba(255,255,255,0)' }
                    }
                },
                series: [{
                    // data: [],
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            color: '#000'
                        }
                    },
                    //配置样式
                    itemStyle: {
                        //通常情况下：
                        normal: {
                            //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                            // color: function (params){
                            //     var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)'];
                            //     return colorList[params.dataIndex];
                            // }
                            color: ['#5182BC']
                        },
                        //鼠标悬停时：
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    //设置柱子的宽度
                    // barWidth : 120,
                }]
            };
            


// 使用刚指定的配置项和数据显示图表。

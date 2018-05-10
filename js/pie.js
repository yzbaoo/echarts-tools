// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
option = {
    title: {
        text: '',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: ['#8fc31f', '#f35833', '#5E9DD3', '#ffcc00'],
    legend: {
        bottom: 40,
    },
    toolbox: {
        feature: {
            saveAsImage: { backgroundColor: 'rgba(255,255,255,0)' }
        }
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                { value: 89.64, name: '考生' }, { value: 8.36, name: '教育机构' }, { value: 2, name: '其他' }],

            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        //	                            position:'inside',
                        formatter: '{b} : ({d}%)'
                    }
                },
                labelLine: { show: true }
            }
        }
    ]
};
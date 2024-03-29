<template>
    <div>
        <el-tooltip effect="dark" :content="isFullScreen ? '取消全屏' : '全屏浏览'" placement="bottom">
            <i class="el-icon-rank" @click="handleToggleFullScreen"></i>
        </el-tooltip>
        <div :id="chartId"></div>
    </div>
</template>

<script>
    import G2 from '@antv/g2';
    export default {
        props: {
            height: {
                type: Number,
                default: 360
            }
        },
        data() {
            return {
                isFullScreen: false,

                chartId: 'chart' + +new Date() + ((Math.random() * 1000).toFixed(0) + ''),
                chartData: [{
                    "month": "Jan",
                    "city": "Tokyo",
                    "temperature": -2
                }, {
                    "month": "Jan",
                    "city": "London",
                    "temperature": 3.9
                }, {
                    "month": "Feb",
                    "city": "Tokyo",
                    "temperature": 6.9
                }, {
                    "month": "Feb",
                    "city": "London",
                    "temperature": 4.2
                }, {
                    "month": "Mar",
                    "city": "Tokyo",
                    "temperature": 9.5
                }, {
                    "month": "Mar",
                    "city": "London",
                    "temperature": 5.7
                }, {
                    "month": "Apr",
                    "city": "Tokyo",
                    "temperature": 14.5
                }, {
                    "month": "Apr",
                    "city": "London",
                    "temperature": 8.5
                }, {
                    "month": "May",
                    "city": "Tokyo",
                    "temperature": 18.4
                }, {
                    "month": "May",
                    "city": "London",
                    "temperature": 11.9
                }, {
                    "month": "Jun",
                    "city": "Tokyo",
                    "temperature": 21.5
                }, {
                    "month": "Jun",
                    "city": "London",
                    "temperature": 15.2
                }, {
                    "month": "Jul",
                    "city": "Tokyo",
                    "temperature": 25.2
                }, {
                    "month": "Jul",
                    "city": "London",
                    "temperature": 17
                }, {
                    "month": "Aug",
                    "city": "Tokyo",
                    "temperature": 26.5
                }, {
                    "month": "Aug",
                    "city": "London",
                    "temperature": 16.6
                }, {
                    "month": "Sep",
                    "city": "Tokyo",
                    "temperature": 23.3
                }, {
                    "month": "Sep",
                    "city": "London",
                    "temperature": 14.2
                }, {
                    "month": "Oct",
                    "city": "Tokyo",
                    "temperature": 18.3
                }, {
                    "month": "Oct",
                    "city": "London",
                    "temperature": 10.3
                }, {
                    "month": "Nov",
                    "city": "Tokyo",
                    "temperature": 13.9
                }, {
                    "month": "Nov",
                    "city": "London",
                    "temperature": 6.6
                }, {
                    "month": "Dec",
                    "city": "Tokyo",
                    "temperature": 9.6
                }, {
                    "month": "Dec",
                    "city": "London",
                    "temperature": 4.8
                }]
            }
        },
        mounted() {
            this.createChart(this.chartId, this.chartData);
        },
        methods: {
            createChart(container, data) {
                let chart = new G2.Chart({
                    container: container,
                    forceFit: true,
                    height: this.height,
                    background: {
                        fill: "#fff"
                    }
                });
                chart.source(data);
                chart.scale({
                    month: {
                        range: [0, 1],
                    }
                })
                chart.axis('temperature', {
                    label: { formatter: val => `${val}°C` }
                });
                chart
                    .line()
                    .position('month*temperature')
                    .color('city')
                    .shape('smooth')
                    .tooltip('city*temperature', (city, temperature) => ({
                        name: city,
                        value: temperature + "°C"
                    }))
                chart
                    .point()
                    .position('month*temperature')
                    .color('city')
                    .size(4)
                    .shape('circle')
                    .style({
                        stroke: '#fff',
                        lineWidth: 1
                    });
                chart.render();
            },
            // 全屏浏览
            handleToggleFullScreen() {
                if (this.isFullScreen) {
                    const doc = document
                    const exitFullScreen =
                        doc.exitFullscreen || doc.webkitCancelFullScreen || doc.mozCancelFullScreen || doc.msExitFullscreen
                    if (exitFullScreen) {
                        exitFullScreen.call(doc)
                    }
                } else {
                    const htmlDOM = document.documentElement
                    const enterFullScreen =
                        htmlDOM.requestFullscreen ||
                        htmlDOM.webkitRequestFullScreen ||
                        htmlDOM.mozRequestFullScreen ||
                        htmlDOM.msRequestFullscreen
                    if (enterFullScreen) {
                        enterFullScreen.call(htmlDOM)
                    } else {
                        this.$message({
                            type: 'warning',
                            message: '您的浏览器不支持全屏浏览，请升级或更换浏览器！',
                        })
                    }
                }
                this.isFullScreen = !this.isFullScreen
            },
        }
    }
</script>
<style>
    .el-icon-rank {
        margin-right: 10px;
        font-size: 40px;
        color: #fff;
        line-height: 50px;
        transform: rotateZ(45deg);
        cursor: pointer;
    }
</style>

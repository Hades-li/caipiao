<template>
    <div class="info clearfix">
        <div class="l-wrap">
            <p class="text">第{{firstExpect}}期 离截止时间</p>
            <p class="time">{{zerotime}}</p>
        </div>
        <i class="line"></i>
        <div class="m-wrap">
            <p class="text">11选5 第{{firstExpect}}期号码 </p>
            <div class="num">
                <span v-for="item in openCodeList">{{item}}</span>
            </div>
        </div>
        <i class="line"></i>
        <div class="r-wrap">
            <p class="title">
                <span class="qc">期次</span>
                <span class="num">开奖号码</span>
            </p>
            <ul class="list">
                <li v-for="item in historyExpects">
                    <span class="qici">{{item.opentimestamp}}</span>
                    <span class="num">{{item.opencode.replace(/,/g,' ')}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "info",
        props: {
            data: Array,
        },
        data () {
            return {
                zerotime: '00:00:00'
            }
        },
        watch: {

        },
        computed: {
            firstExpect() {
                if (this.data.length > 0) {
                    const expect = this.data[0].expect
                    const opentime = new Date(this.data[0].opentime)
                    const curtime = new Date()
                    const ms = opentime.getTime() - curtime.getTime()
                    if (ms < 0) {
                        this.zerotime = '00:00:00'
                    } else {
                        const time = new Date(ms)
                        this.zerotime = time.Format('hh:mm:ss')
                    }

                    return expect
                } else {
                    return ''
                }
            },
            openCodeList () {
                if (this.data.length > 0){
                    return this.data[0].opencode.split(',')
                }
            },
            historyExpects() {
                const list = []
                this.data.forEach((item, index) => {
                    if (index !== 0) {
                        list.push(item)
                    }
                })
                return list
            }
        }
    }
</script>

<style lang="scss" scoped>
    .info {
        padding-top: 20px;
        padding-bottom: 10px;
        width: 982px;
        border: 1px solid #b2b2b2;
        margin: 0 auto;
    }

    .l-wrap {
        float: left;
        width: 284px;
        text-align: center;
        .text {
            padding-bottom: 14px;
            font-size: 14px;
            color: #6f6e72;
        }
        .time {
            color: #000;
            font-size: 44px;
        }
    }

    .m-wrap {
        float: left;
        text-align: center;
        padding-left: 62px;
        padding-right: 44px;
        .text {
            padding-bottom: 10px;
            font-size: 14px;
            color: #6f6e72;
        }
        .num {
            span {
                display: inline-block;
                width: 56px;
                height: 56px;
                margin-right: 10px;
                line-height: 56px;
                background: linear-gradient(0deg, #d7d7d7, #fff);
                border: 2px solid #b3b3b3;
                border-radius: 50%;
                font-size: 32px;
                text-align: center;
            }
        }
    }

    .r-wrap {
        float: right;
        padding-right: 20px;
        .title {
            padding-left: 20px;
            padding-bottom: 6px;
            color: #6f6e72;
            .qc {
                padding-right: 60px;
            }
        }
        .list {
            li {
                margin-bottom: 5px;
                padding: 0 12px;
                border: 1px solid #cbcbcb;
                height: 22px;
                line-height: 22px;
                border-radius: 11px;
                color: #000;
                .qici {
                    padding-right: 12px;
                }
            }
        }
    }

    .line {
        float: left;
        height: 93px;
        width: 1px;
        margin-top: 13px;
        background-color: #d2d2d2;
    }
</style>

<template>
    <div class="home">
        <!--<home-head></home-head>-->
        <info v-bind:data="data"></info>
        <div class="page">
            第二页
        </div>
    </div>
</template>

<script>
    import homeHead from '@/components/head'
    import info from '@/components/info'
    export default {
        name: "index",
        mounted() {
            console.log('开始')
            const url = 'http://f.apiplus.cn/bj11x5.json'
            this.$jsonp(url).then((json) => {
                const res = json
                if (res.data.length > 0) {
                    this.data = res.data
                }
            }).catch((err) => {
                console.error(err)
            })

        },
        data () {
            return {
                data: []
            }
        },
        components: {
            homeHead,
            info
        }
    }
</script>

<style lang=scss scoped>
    .page{
        text-align: center;
        font-size: 90px;
    }
</style>

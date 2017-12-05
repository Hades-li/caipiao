<template>
    <div id="app">
        <nav>
            <div class="wrap">
                <img src="/static/logo.png" alt="">
                <div class="nav-list">
                    <router-link to="/">第一页</router-link> |
                    <router-link to="/page2">第二页</router-link>
                </div>
            </div>
        </nav>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss">
    @import "assets/css/reset";

</style>
<style lang="scss" scoped>
    nav{
        padding: 10px 0;
        border-bottom: 2px solid #016167;
        background-color: #15b8c2;
        .wrap{
            width: 980px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .nav-list{
            color: #fff;
            a{
                font-size: 14px;
                color: #fff;
                margin: 0 10px;
            }
        }
    }
</style>

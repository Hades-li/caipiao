import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/index'
import page2 from '@/pages/page2'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:
        [
            {
                path: '/',
                name: 'page',
                component: home
            },
            {
                path: '/page2',
                name: 'page2',
                component: page2
            }
        ]
})

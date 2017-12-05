import axios from 'axios'

export default function install(Vue) {
    Vue.prototype.$axios = axios
}

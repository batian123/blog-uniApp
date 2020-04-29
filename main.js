import Vue from 'vue'
import App from './App'
import {myApi} from "./until/api.js"
Vue.prototype.$myApi=myApi

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

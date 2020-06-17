import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
import './plugins/element'
import $ from 'jquery'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.$ = $


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

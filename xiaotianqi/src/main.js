import Vue from 'vue'
import Home from './pages/Home/Home.vue'
import './assets/iconfont/iconfont.css'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Home),
}).$mount('#app')

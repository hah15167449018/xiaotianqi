import Vue from 'vue'
import Home from './pages/Home/Home.vue'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(Home),
}).$mount('#app')

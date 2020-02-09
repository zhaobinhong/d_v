// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/css/common.css'
import Vs from 'd3-vs'
import zoom from './assets/scripts/tool/zoom'
zoom()

Vue.use(Vs)

// import only the components that you need and register it manually
window.addEventListener('resize', zoom)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './http'
import riqiRilter from './global/filters/riqi'
import 'muse-ui/lib/styles/base.less'
import { Button, Select } from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'
import './assets/css/github.css'
import './assets/css/commin.less'
Vue.use(Button)
Vue.use(Select)

Vue.use(riqiRilter)
// 将http对象写在Vue的原型上
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

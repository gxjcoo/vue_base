import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'
import axios from './http'
console.log(axios)
Vue.use(Element);
Vue.use(axios);
new Vue({
  router,
  store,
  render:h=>h(App)
}).$mount('#app')
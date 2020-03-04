import Vue from 'vue'
import './assets/css/github.css'
import './assets/css/commin.less'
import App from './App'
import router from './router'
import store from './store'
import axios from './http'
import riqi_filter from './global/filters/riqi';
Vue.use(riqi_filter);
// 将http对象写在Vue的原型上
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render:h=>h(App)
}).$mount('#app')
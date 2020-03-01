import Vue from 'vue'
import VueRouter from "vue-router";
import test from './test.js'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'hash',
  routes: [
    ...test
  ]
})

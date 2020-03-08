import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../global/layouts/Main.vue'
import test from './test.js'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      ...test
    ]
  }]
})

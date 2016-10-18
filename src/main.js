import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from './App'

Vue.use(VueRouter)

const Foo = { template: '<div>Foo</div>' }

const routes = [
  { path: '/', component: Foo }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-unused-vars */
const app = new Vue({
  router
}).$mount('#app')

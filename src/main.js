import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('id_token')

import Home from './components/Home'

const routes = [
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-unused-vars */
const app = new Vue({
  router
}).$mount('#app')

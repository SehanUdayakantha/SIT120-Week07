import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import Product from '../views/ProductPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/HomePageVue",
    name: "HomePageVue",
    component: Home
  },
  {
    path: "/ProductPageVue",
    name: "ProductPageVue",
    component: Product
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Login_DL from './views/Login_DL.vue'
import Login_ZC from './views/Login_ZC.vue'
import Product from './views/Product.vue'
import Details from './views/Details.vue'
import Cart from './views/Cart.vue'
import Jiesuan from './views/Jiesuan.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/login/login_dl',
      name: 'login_dl',
      component: Login_DL
    },
    {
      path: '/login/login_zc',
      name: 'login_zc',
      component: Login_ZC
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/product/details/:key',
      name: 'details_none',
      component: Details,
      meta: {
        notRequiredLogin: true
        }
    },
    {
      path: '/cart/:id',
      name: 'cart',
      component: Cart,
      props:true
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/jies',
      name: 'jiesuan',
      component: Jiesuan
    },
  ]
})

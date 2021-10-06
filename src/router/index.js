import Vue from 'vue'
import VueRouter from 'vue-router'
// admin
import Home from '../modules/adminPage/Home.vue'
import Product from '../modules/adminPage/components/products/Index'


//user
import UserHome from '../modules/userPage/Home'
import Cart from '../modules/userPage/Cart'
import Body from '../modules/userPage/Body'
import Login from '../modules/userPage/Login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/admin', component: Home,
    children: [
      { path: '/admin/product', component: Product },
    ]
  },
  {
    path: '/', component: UserHome,    
    children: [
      { path: '/', component: Body},  
      {path: '/cart', component: Cart},
      {path: '/login', component: Login},
    ]
  },
  

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router;
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import MyOne from '@/components/MyOne'
import Search from '@/components/Search'
import Cart from '@/components/Cart'
import Shop from "@/components/Shop"
import Detail from '@/components/Detail'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import { isLogined } from '@/utils/auth'
import Coupon from '@/components/Coupon'
import MyAddress from '@/components/MyAddress'
import AddMyAddress from '@/components/AddMyAddress'
import Order from '@/components/Order'



Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/myone',
      name: 'MyOne',
      component: MyOne,
    },
    {
      path: '/myaddress',
      name: 'MyAddress',
      component: MyAddress,
    },
    {
      path: '/addmyaddress',
      name: 'AddMyAddress',
      component: AddMyAddress,
    },
    {
      path: '/coupon',
      name: 'Coupon',
      component: Coupon,
    },{
      path: '/order',
      name: 'Order',
      component: Order,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: "/shop",
      name: "Shop",
      component: Shop
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: "/detail/:id",
      name: 'Detail',
      component: Detail
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (isLogined()) {
      next()
    } else {
      next({
        name: 'Login'
      });
    }
  } else {
    next();
  }
})






export default router



import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import MyOne from '@/components/MyOne'
import Search from '@/components/Search'
import Cart from '@/components/Cart'
import Shop from "@/components/Shop"
import Detail from '@/components/Detail'
import TuwenDetail from "@/components/TuwenDetail"
import Login from '@/components/Login'
import Pingjia from '@/components/Pingjia'
import Reg from '@/components/Reg'
import { isLogined } from '@/utils/auth'


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
      component: Cart, meta: {
        needLogin: true,
      }
    }, {
      path: '/myone',
      name: 'MyOne',
      component: MyOne,
      meta: {
        needLogin: true,
      }
    }, {
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
      path: "/detail",
      name: 'Detail',
      component: Detail,
      children: [
        {
          path: "/tuwendetail",
          name: "TuwenDetail",
          component: TuwenDetail,
        },
        {
          path: "/pingjia",
          name: "Pingjia",
          component: Pingjia,
        }
      ]
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



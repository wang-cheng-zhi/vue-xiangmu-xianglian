import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import MyOne from '@/components/MyOne'
import Search from '@/components/Search'
import Cart from '@/components/Cart'
import Shop from "@/components/Shop"
import Detail from  '@/components/Detail'
import TuwenDetail from "@/components/TuwenDetail"
import Login from '@/components/Login'
import Pingjia from '@/components/Pingjia'
import Coupon from '@/components/Coupon'
import MyAddress from '@/components/MyAddress'
import AddMyAddress from '@/components/AddMyAddress'


Vue.use(Router)

export default new Router({
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
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: "/shop",
      name: "Shop",
      component: Shop
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:"/detail",
      name:'Detail',
      component:Detail,
      children:[
        {
          path:"/tuwendetail",
          name:"TuwenDetail",
          component:TuwenDetail,
        },
        {
          path:"/pingjia",
          name:"Pingjia",
          component:Pingjia,
        }
      ]
    }
  ]
})

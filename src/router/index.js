import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import MyOne from '@/components/MyOne'
import Search from '@/components/Search'
import Cart from '@/components/Cart'
import Shop from "@/components/Shop"
import Detail from  '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/cart',
      name: 'Cart',
      component: Cart
    },{
      path: '/myone',
      name: 'MyOne',
      component: MyOne
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path:"/shop",
      name:"Shop",
      component:Shop
    },
    {
      path:"/detail",
      name:'Detail',
      component:Detail
    }
  ]
})

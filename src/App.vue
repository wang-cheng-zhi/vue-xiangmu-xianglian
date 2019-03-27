<template>
  <div id="app">
    <router-view @footactive="getactive" />

      <van-tabbar v-model="active" active-color="#fa2c5c">
        <van-tabbar-item icon="wap-home" :to="{ name: 'Index' }">首页</van-tabbar-item>
        <van-tabbar-item icon="search" :to="{ name: 'Search' }">发现</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" :to="{ name: 'Cart' }">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o" :to="{ name: 'MyOne' }">个人中心</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      active:null,
    }
  },
  mounted(){
  },
  methods:{
		getactive(msg){
      this.active = msg;
      console.log(msg)
		}
  }
}
</script>

<style>
van-tabbar-item--active{color:#fa2c5c}
</style>

<template>
  <div id="app">
    <router-view/>
    <footer>
      <van-tabbar v-model="active" active-color="#fa2c5c"  @change="navChangeHandle">
        <van-tabbar-item icon="wap-home" :to="{ name: 'Index' }">首页</van-tabbar-item>
        <van-tabbar-item icon="search" :to="{ name: 'Search' }">发现</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" :to="{ name: 'Shop' }">商城</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" :to="{ name: 'Cart' }">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o" :to="{ name: 'MyOne' }">个人中心</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
window.onload = function(){
/*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
   为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
   getRem(1080,100)
   };
   window.onresize = function(){
   getRem(1080,100)
   };
   function getRem(pwidth,prem){
   var html = document.getElementsByTagName("html")[0];
   var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
	}
export default {
  name: 'App',
  data() {
    return {
      active:0,
    }
  },
  methods: {
    navChangeHandle(){
      switch(this.active) {
        case 0:
          this.$router.push({
            name: 'Index'
          })
        break;
        case 1:
          this.$router.push({
            name: 'Search'
          })
        break;
        case 2:
          this.$router.push({
            name: 'Shop'
          })
        break;
        case 3:
          this.$router.push({
            name: 'Cart'
          })
        break;
        case 4:
          this.$router.push({
            name: 'MyOne'
          })
        break;

      }
    }
  },
}
</script>

<style>
html,body,div,header,footer,section,article,ul,li,h1,h2,h3,h4,h5,h6,dl,dd,dt,p,span,i,input,button{
	margin:0;
	padding:0;
}
li{list-style:none;}
a{text-decoration:none;}
#box{
  height:100vh;
}

</style>

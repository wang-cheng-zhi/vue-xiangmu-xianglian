<template>
  <div id="app">
    <router-view @footactive="getactive" />
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
		}
  }
}
</script>

<style>
van-tabbar-item--active{color:#fa2c5c}
html,body,div,header,footer,section,article,ul,li,h1,h2,h3,h4,h5,h6,dl,dd,dt,p,span,i,input,button{
	margin:0;
	padding:0;
}
li{list-style:none;}
a{text-decoration:none;}
#box{
  height:100vh;
}
*{
  margin: 0;
  padding: 0;
}
</style>

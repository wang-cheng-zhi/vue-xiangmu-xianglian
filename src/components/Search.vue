<template>
  <div>
    <header>
      <van-nav-bar title="星链发现" left-text=""  left-arrow >
        <van-icon name="search" slot="right" />
      </van-nav-bar>
      <van-swipe :autoplay="3000" indicator-color="white" >
        <van-swipe-item ><img src="../images/dongwu7.jpg" class="van-swipe-img"/></van-swipe-item>
        <van-swipe-item><img src="../images/dongwu9.jpg" class="van-swipe-img"/></van-swipe-item>
        <van-swipe-item><img src="../images/dongwu7.jpg" class="van-swipe-img"/></van-swipe-item>
        <van-swipe-item><img src="../images/dongwu9.jpg" class="van-swipe-img"/></van-swipe-item>
      </van-swipe>
    </header>
    <section>
      <div class="search-sec">
        <van-panel title="星链发现" desc="昨天17：15分" status="置顶" icon="like-o">
          <div class="search-detail">
            嘟嘟网络游戏服务网为全球华人玩家提供担保,租购售游戏币、帐号、装备、
            点券、代练等服务。手游首充号让利给更多玩家!DD373致力于免手续费的网络
            游戏交易平台
          </div>
          <div class="search-img">
              <img src="../images/dongwu1.jpg" class="search-img-img"/>
              <img src="../images/dongwu1.jpg" class="search-img-img"/>
              <img src="../images/dongwu1.jpg" class="search-img-img"/>
          </div>
          <div>
            <van-card  title="钢化曲面高清70吋网络液晶电视机75 65 60 55 42 32智能语音投屏,
            钢化曲面高清70吋网络液晶电视机75 65 60 55 42 32智能语音投屏"  :thumb="imageURL" />
          </div>
          <div slot="footer">
            <van-button size="small" round type="primary" @click="dianzhan">
              <van-icon name="thumb-circle-o" />点赞{{countdianzhan}}
            </van-button>
            <van-button size="small" type="danger" round>
              <van-icon name="expand-o"/>分享{{countfenxiang}}
              </van-button>
          </div>
        </van-panel>
      </div>
    </section>

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
  data() {
    return{
      active:1,
      countdianzhan:"5",
      countfenxiang:"5",
      imageURL:require("../images/Tuwen-Detail-1.jpg")
    }
  },
  mounted(){
		this.$emit("footactive",this.active)
  },
  methods:{
    dianzhan(){

    },
    getactive(msg){
      this.active = msg;
      console.log(msg)
		}
  }
};
</script>

<style scoped="">
section{flex: 1;overflow:auto;margin-bottom: 5rem;}
.search-sec{padding:0 0.5rem 0 0.5rem;}
.van-swipe{width: 100%;margin-bottom: 0.5rem;padding-top: 3rem}
.van-swipe-img{width: 100%;}
.log{width: 40px;height: 40px;}
.van-panel__footer{width: 100%;height: 2rem;}
.van-button--small{width: 8rem;height: 2.5rem;}
.search-detail{font-size: 0.8rem;color: #999999;}
.search-img-img{width: 30%;height: 5rem;padding: 0.2rem;}
.van-nav-bar{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  position: fixed;
}
</style>

<template>
  <div id="out">
    <div class="search">
      <van-icon class="info" name="chat" size="1.6rem"/>
      <van-search class="search1" placeholder="搜索商品" v-model="value" shape="round"/>
      <van-icon class="list" name="bars" size="1.6rem"/>
    </div>
    <section>
      <van-tabs v-model="active" :swipe-threshold="8" :ellipsis="false">
        <van-tab title="爆款秒杀">
          <Hot></Hot>
        </van-tab>
        <van-tab title="酒水">
          <Drink></Drink>
        </van-tab>
        <van-tab title="食品">
          <Food></Food>
        </van-tab>
        <van-tab title="美妆">
          <Beauty></Beauty>
        </van-tab>
        <van-tab title="服饰">
          <Costume></Costume>
        </van-tab>
        <van-tab title="母婴">
          <Mom></Mom>
        </van-tab>
        <van-tab title="家居">
          <HouseHold></HouseHold>
        </van-tab>
        <van-tab title="家电">
          <Furniture></Furniture>
        </van-tab>
      </van-tabs>

      <div class="Index-list">
        <ul class="Index-ul">
            <li class="Index-li">
              <img src="../images/dongwu1.jpg" class="Index-img"/>
              <h2 class="Index-name">型峡谷你觉得你的</h2>
              <p class="Index-desc">可免费我让你服务框架归为你</p>
              <div class="Index-price">
                <div class="Index-xinprice">￥50元</div>
                <div class="Index-jiuprice">￥50元</div>
              </div>
            </li>
            <li class="Index-li">
              <img src="../images/dongwu1.jpg" class="Index-img"/>
              <h2 class="Index-name">型峡谷你觉得你的</h2>
              <p class="Index-desc">可免费我让你服务框架归为你</p>
              <div class="Index-price">
                <div class="Index-xinprice">￥50元</div>
                <div class="Index-jiuprice">￥50元</div>
              </div>
            </li>
            <li class="Index-li">
              <img src="../images/dongwu1.jpg" class="Index-img"/>
              <h2 class="Index-name">型峡谷你觉得你的</h2>
              <p class="Index-desc">可免费我让你服务框架归为你</p>
              <div class="Index-price">
                <div class="Index-xinprice">￥50元</div>
                <div class="Index-jiuprice">￥50元</div>
              </div>
            </li>
            <li class="Index-li">
              <img src="../images/dongwu1.jpg" class="Index-img"/>
              <h2 class="Index-name">型峡谷你觉得你的</h2>
              <p class="Index-desc">可免费我让你服务框架归为你</p>
              <div class="Index-price">
                <div class="Index-xinprice">￥50元</div>
                <div class="Index-jiuprice">￥50元</div>
              </div>
            </li>
        </ul>
      </div>
    </section>
    <van-tabbar v-model="active" active-color="#fa2c5c">
      <van-tabbar-item icon="wap-home" :to="{ name: 'Index' }">首页</van-tabbar-item>
      <van-tabbar-item icon="search" :to="{ name: 'Search' }">发现</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :to="{ name: 'Cart' }">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" :to="{ name: 'MyOne' }">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Drink from "./tab_categories/Drink.vue";
import Hot from "./tab_categories/Hot.vue";
import Beauty from "./tab_categories/Beauty.vue";
import Costume from "./tab_categories/Costume.vue";
import Food from "./tab_categories/Food.vue";
import Furniture from "./tab_categories/Furniture.vue";
import HouseHold from "./tab_categories/HouseHold.vue";
import Mom from "./tab_categories/Mom.vue";

export default {
  data() {
    return {
      active: 0,
      value: ""
    };
  },
  components: {
    Hot,
    Drink,
    Beauty,
    Costume,
    Food,
    Furniture,
    HouseHold,
    Mom
  },
  mounted() {
    this.$emit("footactive", this.active);
  }
};
</script>

<style scoped>
.search {
  padding: 5px 5px;
  height: 100%;
  line-height: 100%;
}
.info {
  float: left;
  padding-top: 0.8rem;
  padding-left: 0.2rem;
}
.list {
  padding-top: 0.8rem;
  padding-right: 0.2rem;
  float: right;
}
.search1 {
  width: 83%;
  display: inline-block;
}
.nav {
  font-size: 0.8rem;
}
section{flex: 1;overflow: auto;margin-bottom: 5rem;}
.Index-ul{display: flex;flex-wrap: wrap;padding: 0.5rem;background: #f4e9e9;}
.Index-li{width: 6rem;padding: 0.2rem;}
.Index-img{width: 6rem;height: 6rem;}
.Index-name{line-height: 1.2rem;font-size: 0.7rem;color: deeppink;overflow: hidden;}
.Index-desc{line-height: 1.2rem;font-size: 0.7rem;color: #ffffff;overflow: hidden;}
.Index-price{line-height: 1.2rem;font-size: 0.7rem;float: left;}
.Index-xinprice{line-height: 1.2rem;font-size: 0.7rem;color:#000000;float: left;}
.Index-jiuprice{line-height: 1.2rem;font-size: 0.7rem;float: right;color: #cecece;text-decoration: line-through;}
</style>

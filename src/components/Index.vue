<template>
  <div id="out">
    <header class="search">
      <van-icon class="info" name="chat" size="1.6rem"/>
      <van-search class="search1" placeholder="搜索商品" v-model="value" shape="round"/>
      <van-icon class="list" name="bars" size="1.6rem"/>
    </header>
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
          <router-link
            v-for="item in products"
            :key="item._id"
            class="Index-li"
            :to="`/detail/${item._id}`"
            tag="li"
          >
            <img :src="serverUrl+item.coverImg" class="Index-img">
            <h2 class="Index-name">{{item.name}}</h2>
            <p class="Index-desc">{{item.descriptions}}</p>
            <div class="Index-price">
              <div class="Index-xinprice">￥{{item.price}}元</div>
              <div class="Index-jiuprice">￥{{item.price}}元</div>
            </div>
          </router-link>
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
import { getProducts } from "../services/products";
import { addToShopCart } from "../services/users";
import { serverUrl } from "../utils/config";

export default {
  data() {
    return {
      active: 0,
      value: "",
      products: [],
      page: 1,
      pageCount: 1,
      serverUrl
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
  created() {
    this.loadData();
  },
  mounted() {},
  methods: {
    loadData() {
      // get(`${serverUrl}/api/v1/products?page=${this.page}`)
      getProducts({ page: this.page })
        .then(res => {
          // console.log(res)
          // 拼接服务器端的数据 使用数组的concat方法实现
          this.products = this.products.concat(res.data.products);
          this.pageCount = res.data.pages;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
#out {
  display: flex;
  flex-direction: column;
}
.search {
  position: fixed;
  z-index: 999;
  padding: 5px 5px;
  line-height: 100%;
  flex: 0;
  min-width: 19rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  background: #ffffff;
}
.info {
  float: left;
  padding-top: 0.8rem;
  padding-left: 0.2rem;
}
.list {
  display: block;
  width: 2rem;
  padding-top: 0.8rem;
  margin-right: 0.2rem;
}
.search1 {
  width: 83%;
  height: 3rem;
  display: inline-block;
}
.nav {
  font-size: 0.8rem;
}
section {
  flex: 1;
  overflow: auto;
  margin-bottom: 5rem;
  margin-top: 3rem;
}
.Index-ul {
  width: 100%;
  min-width: 20rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  background: #f4e9e9;
}
.Index-ul li {
  width: 29%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.Index-li {
  width: 6rem;
  padding: 0.5rem;
}
.Index-img {
  width: 6rem;
  height: 6rem;
}
.Index-name {
  line-height: 1.2rem;
  font-size: 0.7rem;
  color: deeppink;
  overflow: hidden;
  white-space: nowrap;
}
.Index-desc {
  line-height: 1.2rem;
  font-size: 0.7rem;
  color: #ffffff;
  overflow: hidden;
  white-space: nowrap;
}
.Index-price {
  line-height: 1.2rem;
  font-size: 0.5rem;
  float: left;
}
.Index-xinprice {
  line-height: 1.2rem;
  font-size: 0.5rem;
  color: #000000;
  float: left;
}
.Index-jiuprice {
  line-height: 1.2rem;
  font-size: 0.5rem;
  float: right;
  color: #cecece;
  text-decoration: line-through;
}
</style>

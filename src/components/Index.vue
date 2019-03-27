<template>
  <div id="out">
    <div class="search">
      <van-icon class="info" name="chat" size="1.6rem"/>
      <van-search class="search1" placeholder="搜索商品" v-model="value" shape="round"/>
      <van-icon class="list" name="bars" size="1.6rem"/>
    </div>


    <van-tabs v-model="active" :swipe-threshold="8" :ellipsis="false">
      <van-tab title="爆款秒杀"><Hot></Hot></van-tab>
      <van-tab title="酒水"><Drink></Drink></van-tab>
      <van-tab title="食品"><Food></Food></van-tab>
      <van-tab title="美妆"><Beauty></Beauty></van-tab>
      <van-tab title="服饰"><Costume></Costume></van-tab>
      <van-tab title="母婴"><Mom></Mom></van-tab>
      <van-tab title="家居"><HouseHold></HouseHold></van-tab>
      <van-tab title="家电"><Furniture></Furniture></van-tab>
    </van-tabs>

  </div>
</template>

<script>
import Drink from './tab_categories/Drink.vue'
import Hot from './tab_categories/Hot.vue'
import Beauty from './tab_categories/Beauty.vue'
import Costume from './tab_categories/Costume.vue'
import Food from './tab_categories/Food.vue'
import Furniture from './tab_categories/Furniture.vue'
import HouseHold from './tab_categories/HouseHold.vue'
import Mom from './tab_categories/Mom.vue'

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
</style>

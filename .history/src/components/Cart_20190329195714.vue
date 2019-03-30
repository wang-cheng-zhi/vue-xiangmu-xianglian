<template>
  <div class="shop">
    <header>
      <van-nav-bar title="购物车" left-text="返回" left-arrow>
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </header>
    <section>
      <div class="cart" @click="ToDetail()"  v-for="s in shopCart" :key="s.product">
        <van-checkbox v-model="checked"></van-checkbox>
        <van-card
          num="4"
          tag="标签"
          price="2.00"
          desc="商品可以的购买"
          title="新鲜粗人的四个"
          :thumb="imageURL"
          origin-price="10.00"
        >
        <button slot="num">+</button>
        <input type="text" slot="num" value="0" class="cart-input"/>
        <button slot="num">-</button>
          <div slot="footer">
            <van-button size="mini">结算</van-button>
            <van-button size="mini">删除</van-button>
          </div>
        </van-card>
      </div>

    </section>
    <div>
      <van-submit-bar :price="3050"  button-text="提交订单" @submit="onSubmit" >
        <van-checkbox v-model="checked">全选</van-checkbox>
        <span slot="tip">
          你的收货地址不支持同城送, <span>修改地址</span>
        </span>
      </van-submit-bar>
    </div>
    <van-tabbar v-model="active" active-color="#fa2c5c">
      <van-tabbar-item icon="wap-home" :to="{ name: 'Index' }">首页</van-tabbar-item>
      <van-tabbar-item icon="search" :to="{ name: 'Search' }">发现</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :to="{ name: 'Cart' }">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" :to="{ name: 'MyOne' }">个人中心</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
import { getShopCart } from '../services/users';
export default {
  name:"Cart",
  data() {
    return {
      active:2,
      imageURL:require("../images/cart-1.jpg"),
      checked:true,
      shopCart:[]
    }
  },
  methods: {
    onSubmit(){

    },
    ToDetail(){
      this.$router.push("/Detail")
    },
    getactive(msg){
      this.active = msg;
      console.log(msg)
		}
  },
  mounted(){

  },
  created() {
    this.shopCart = getShopCart()
  }
};
</script>

<style scoped="">
header{display: block}
.cart{display:flex;justify-content:space-around;}
.van-checkbox{display: inline;}
.van-card{
  padding:0.05rem 0;width: 90%
}
section{margin-bottom: 5rem;flex: 1;overflow: auto;}
.van-submit-bar{bottom: 2.7rem;}
.cart-input{width: 0.8rem;text-align: center;}
</style>

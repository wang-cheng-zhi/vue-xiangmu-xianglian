<template>
  <div class="shop">
    <header>
      <van-nav-bar title="购物车" left-text="返回" left-arrow>
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </header>
    <section>
      <div class="cart" v-for="item in shopCart" :key="item.product">
        <van-checkbox v-model="checked"></van-checkbox>
        <van-card
          :num="item.quantity"
          tag="标签"
          :price="item.price"
          :title="item.name"
          :thumb="detail.coverImg?serverUrl+detail.coverImg:''"
          origin-price="10.00"
          :thumb-link='"/#/detail?id="+item.product'
        >
        <van-stepper v-model="val" />
          <div slot="footer">
            <van-button size="mini">修改</van-button>
            <van-button size="mini" @click="delShop(item.product)">删除</van-button>
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
import { getShopCart,delFromProduct } from '../services/users';
import { getProductDetail } from "../services/products";
import { serverUrl } from '../utils/config'
export default {
  name:"Cart",
  data() {
    return {
      active:2,
      imageURL:require("../images/cart-1.jpg"),
      checked:true,
      shopCart:[],
      val:1,
      serverUrl,
    }
  },
  methods: {
    onSubmit(){

    },
    getactive(msg){
      this.active = msg;
      console.log(msg)
    },
    delShop(id){
      if(sessionStorage.getItem("token")){
        this.shopCart= delFromProduct(id)
      }
    }
  },
  mounted(){
  },
  async created() {
    if(sessionStorage.getItem("token")){
      var data = await getShopCart()
      this.shopCart = data.data
      console.log(this.shopCart);
      // var list = this.shopCart;
      // list.forEach(function(item){
      //   console.log(item.product)
      //   getProductDetail(item.product).then(
      //     data=>{
      //       item.name=data.data.name;
      //       item.price=data.data.price;
      //       item.coverImg=data.data.coverImg;
      //       console.log(item)
      //     }
      //   )
      // })
    }else{
      this.$router.push("/login")
    }
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
.van-stepper{z-index:20}
</style>

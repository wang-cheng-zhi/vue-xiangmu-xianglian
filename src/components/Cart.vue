<template>
  <div class="shop">
    <header>
      <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="fanhui()">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </header>
    <section>
      <div class="cart" v-for="(item,index) in shopCart" :key="item.product._id">
        <van-checkbox v-model="checklist[index]"></van-checkbox>
        <van-card
          :num="item.quantity"
          tag="Hot"
          :price="item.product.price"
          :title="item.product.name"
          :thumb="item.product.coverImg?serverUrl+item.product.coverImg:''"
          :desc="item.product.descriptions"
          :origin-price="item.product.price"
          :thumb-link='`/#/detail/${item.product._id}`'
        >
        <van-stepper v-model="val" />
          <div slot="footer">
            <van-button size="mini">修改</van-button>
            <van-button size="mini" @click="delShop(item._id)">删除</van-button>
          </div>
        </van-card>
      </div>
    </section>
    <div>
      <van-submit-bar :price="totPrice"  button-text="提交订单" @submit="onSubmit()" >
        <van-checkbox v-model="checked" @click="selAll()">全选</van-checkbox>
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
      checklist:[],
      shopCart:[],
      val:1,
      serverUrl,
    }
  },
  methods: {
    fanhui(){
      history.go(-1)
    },
    onSubmit(){

    },
    getactive(msg){
      this.active = msg;
      console.log(msg)
    },
    async getShopData(){  //获取购物车数据
      var arr = [];
      if(sessionStorage.getItem("token")){
        var data = await getShopCart()
        data.data.forEach(function(item){
          if(item.product){
            // console.log(item.product)
            arr.push(item)
          }
        })
      }else{
        this.$router.push("/login")
      }
      return arr;
    },
    async delShop(id){
      console.log(id)
      if(sessionStorage.getItem("token")){
        var data = await delFromProduct(id)
        if(data.status == 200){
          this.shopCart = await this.getShopData();
        }
      }
    },
    selAll(){//全选/全不选
      var arr = [];
      if(this.checked){
        for(var i = 0;i<this.shopCart.length;i++){
          arr.push(true)
        }
      }else{
        for(var i = 0;i<this.shopCart.length;i++){
          arr.push(false)
        }
      }
      console.log(this.checked,this.checklist,"1")
      this.checklist = arr;
    }
  },
  computed:{
    totPrice() {
      var tot = 0;
      var shop = this.shopCart;
      var sel = this.checklist;
      var that = this;
      shop.forEach(function(item,i){
        if(sel[i]){
          tot += item.product.price * item.quantity;
          tot = parseFloat((tot).toFixed(2))
          // console.log(tot)
        }else{
          that.checked = false;
        }
      })
      return tot*100;
    }
  },
  mounted(){
  },
  async created() {
    this.shopCart = await this.getShopData();
    console.log(this.shopCart)
    //默认全选中
    this.selAll();
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

<template>
  <div>
    <header>
      <van-nav-bar title="商品详情" left-text="返回" @click-left="ToCart()" left-arrow @click-right="ToShop()">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </header>
    <section>
      <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
        <van-swipe-item><img src="../images/dongwu7.jpg"/></van-swipe-item>
        <van-swipe-item><img src="../images/dongwu9.jpg"/></van-swipe-item>
        <van-swipe-item><img src="../images/dongwu7.jpg"/></van-swipe-item>
        <van-swipe-item><img src="../images/dongwu9.jpg"/></van-swipe-item>
      </van-swipe>
      <div class="detail-title">爱媛38号&nbsp;&nbsp;&nbsp;(大果)&nbsp;&nbsp;8斤装&nbsp;&nbsp;&nbsp;&nbsp;果实颗粒饱满多汁</div>
      <div class="detail-price">价格￥ 78.0</div>
      <div class="detail-color"><span class="detail-color-size">颜色</span><div class="detail-color-fenlei">红色</div></div>
      <router-link :to="{ name: 'TuwenDetail' }"></router-link>
      <ul class="detail-firstul">
          <li><img src="../images/detail-4.gif"/>原装正品</li>
          <li><img src="../images/detail-4.gif"/>闪电发货</li>
          <li><img src="../images/detail-4.gif"/>7天退货</li>
          <li><img src="../images/detail-4.gif"/>全场包邮</li>
      </ul>
      <div class="detail-zhan">
        <div class="detail-zhanshi">
          <div @click="ToTuwenDetail()" :class="classA">图文详情</div>
          <div @click="ToPingjia()" :class="classB">评价</div>
        </div>
        <div v-show="tuwen" class="TuwenDetail">
          <img src="../images/Tuwen-Detail-1.jpg"/>
          <img src="../images/Tuwen-Detail-2.jpg"/>
          <img src="../images/Tuwen_Detail-3.jpg"/>
        </div>

        <div v-show="pingjia">

        </div>
      </div>


      <div class="van-goods-div-action">
        <van-goods-action>
          <van-goods-action-mini-btn  icon="wap-home"  text="首页"  @click="ToIndex"/>
          <van-goods-action-mini-btn   info="5"  icon="cart-o"  text="购物车"  @click="ToCart"/>
          <van-goods-action-mini-btn  icon="shop-o"  text="店铺" />
          <van-goods-action-big-btn text="加入购物车" />
          <van-goods-action-big-btn  primary  text="立即购买"  />
        </van-goods-action>
      </div>
    </section>





  </div>
</template>

<script>

import { getProductDetail } from "../services/products";
import { addToShopCart } from '../services/users'
import { serverUrl } from '../utils/config'

export default {
  name:"Detail",
  data() {
    return {
        tuwen:true,
        pingjia:false,
        classA:"hover",
        classB:"",
        detail:{}
    }
  },
  methods: {
    ToCart(){
       this.$router.push("/cart")
    },
    ToShop(){
      this.$router.push("/shop")
    },
    ToIndex(){
      this.$router.push("/")
    },
    ToTuwenDetail(){
      this.tuwen = true
      this.pingjia = false
      this.classA = "hover"
      this.classB = ""
    },
    ToPingjia(){
      this.tuwen = false
      this.pingjia = true
      this.classA = ""
      this.classB = "hover"
    }
  },
  mounted(){
    var that = this;
    console.log(this.$route.query)
    getProductDetail(this.$route.query.id).then(
      data=>{
        this.detail=data.data
      }
    )
  }
}
</script>


<style scoped="">
section{flex: 1;overflow: auto;margin-bottom:5rem;}
.van-swipe{width: 100%;}
.van-swipe img{width: 100%;}
.van-submit-bar{bottom: 1.7rem;}
.van-goods-div-action{height: 0.5rem;width: 100%;}
.van-goods-action{z-index: 10;}
.detail-title{font-size: 0.8rem;color: #000000;line-height: 2rem;padding: 0 0.75rem 0 0.33rem;
overflow: hidden;height: 2rem;}
.detail-price{font-size: 0.8rem;color: #ff0000;padding: 0 0.3rem;height: 2rem;}
.detail-color{font-size: 0.8rem;height: 2rem;display: flex;color: #999999;}
.detail-color-size{display: block;width: 15%;padding: 0 0.3rem }
.detail-color-fenlei{width: 85%;font-size: 0.8rem;color: deeppink;}
.detail-firstul{width: 100%;height: 0.4rem;margin-top: 0.3rem;padding-bottom: 0.3rem;}
.detail-firstul li{width: 25%;font-size: 0.8rem;color: #000000;float: left;line-height: 0.4rem;text-align: center;}
.detail-firstul img{width: 0.67rem;height: 0.71rem;}

.detail-zhan{background: #ffffff;}
.detail-zhanshi{background: #ffffff;margin-top: 0.5rem;font-size: 0.8rem;height: 1.8rem;line-height: 1.8rem;}
.detail-zhanshi  div{width: 50%;color: #000000;float: left;line-height: 1.4rem;text-align: center;margin-bottom: 0.5rem;}
.detail-zhanshi  .hover{color: #7fa37d;border-bottom: 0.09rem solid #7fa37d;}
.TuwenDetail img {width: 100%;}
</style>


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
      <div class="detail-tuwen" @click="ToTuwenDetail()">
        <div class="detail-tuwen-firstdiv" >图文详情</div>
        <div  class="detail-tuwen-seconddiv"><i>></i></div>
      </div>
      <ul class="detail-firstul">
          <li><img src="../images/detail-4.gif"/>原装正品</li>
          <li><img src="../images/detail-4.gif"/>闪电发货</li>
          <li><img src="../images/detail-4.gif"/>7天退货</li>
          <li><img src="../images/detail-4.gif"/>全场包邮</li>
      </ul>
      <div class="van-goods-div-action">
        <van-goods-action>
          <van-goods-action-mini-btn  icon="chat-o"  text="客服" />
          <van-goods-action-mini-btn   info="5"  icon="cart-o"  text="购物车" />
          <van-goods-action-mini-btn  icon="shop-o"  text="店铺" />
          <van-goods-action-big-btn text="加入购物车" />
          <van-goods-action-big-btn  primary  text="立即购买"  />
        </van-goods-action>
      </div>
    </section>





  </div>
</template>

<script>
export default {
  name:"Detail",
  data() {
    return {

    }
  },
  methods: {
    ToCart(){
        history.go(-1)
    },
    ToShop(){
      this.$router.push("/shop")
    },
    ToTuwenDetail(){
      this.$router.push("/tuwendetail")
    }
  },
}
</script>


<style scoped="">
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
.detail-tuwen{height:2rem;font-size: 0.8rem;color: deeppink;padding: 0 0.3rem;}
.detail-tuwen-firstdiv{float: left;line-height: 1rem;}
.detail-tuwen-seconddiv{float: right;margin-top: 0.3rem;}
.detail-firstul{width: 100%;height: 0.4rem;margin-top: 0.3rem;padding-bottom: 0.3rem;}
.detail-firstul li{width: 25%;font-size: 0.8rem;color: #000000;float: left;line-height: 0.4rem;text-align: center;}
.detail-firstul img{width: 0.37rem;height: 0.41rem;}
</style>


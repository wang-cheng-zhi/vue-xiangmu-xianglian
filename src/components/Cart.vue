<template>
  <!-- <div class="shop">
    <header>
      <van-nav-bar title="购物车" left-text="返回" left-arrow>
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </header>
    <section>
        <div>
          <ul class="shop-ul">
            <li class="shop-li" @click="ToDetail()">
              <div class="shop-checkboxdan"><input type="checkbox"/></div>
                <div class="shop-img"><img src="../images/dongwu2.jpg"/></div>
                <div class="shop-detail">
                    <div class="shop-detail1">
                        <h2>爱媛38号(大果)8斤装果实颗粒饱满多汁</h2>
                    </div>
                    <div class="shop-jiuprice">￥49.00</div>
                    <div class="shop-detail2">
                          <div class="shop-xinprice">￥49.00</div>
                          <div class="shop-jiajian">
                              <div class="shop-jian">-</div>
                              <div class="shop-shuliang">1</div>
                              <div class="shop-jia">+</div>
                          </div>
                    </div>
                    <div class="shop-zongdanprice">小计&nbsp;&nbsp;&nbsp;&nbsp;￥49.00</div>
                </div>
            </li>
          </ul>
        </div>
        <div>
          <van-submit-bar :price="3050"  button-text="提交订单" @submit="onSubmit" >
            <van-checkbox v-model="checked">全选</van-checkbox>
            <span slot="tip">
              你的收货地址不支持同城送, <span>修改地址</span>
            </span>
          </van-submit-bar>
        </div>
    </section>
  <div> -->
</template>

<script>
export default {
  name:"Cart",
  data() {
    return {
      active:2,
      imageURL:require("../images/cart-1.jpg"),
      checked:true,
    }
  },
  methods: {
    onSubmit(){

    },
    ToDetail(){
      this.$router.push("/Detail")
    }
  },
  mounted(){
		this.$emit("footactive",this.active)
	}
};
</script>

<style scoped="">

section{margin-bottom: 0.55rem;}
.van-submit-bar{bottom: 1.7rem;}
.shop-ul{width: 100%;background: #f2e8e9;padding:0.3rem 0;min-height:85.5vh;}
.shop-li{padding: 0.6rem 0.3rem 0.4rem 0.5rem;height: 3.82rem;background: #ffffff;margin-top: 0.3rem;
display:flex;justify-content: space-between;}
.shop-checkboxdan{width: 1.1rem;height: 3.82rem;}
.shop-img{width: 2.72rem;height: 3.82rem;}
.shop-img img{width: 2.72rem;height: 2.20rem;}
.shop-detail{width: 6.19rem;}
.shop-detail1{height: 0.51rem;}
.shop-detail1 h2{overflow: hidden;color: #2f2f2d;font-size: 0.4rem;float: left;}
.shop-shanchu{float:right;}
.shop-jiuprice{height: 0.5rem;margin-top: 0.6rem;color: #b2b2b2;text-decoration: line-through;
font-size: 0.26rem;line-height: 0.5rem;}
.shop-detail2{display: flex;justify-content: space-between;}
.shop-xinprice{height: 0.66rem;font-size: 0.32rem;color: #ec0726;line-height: 0.66rem;}
.shop-jiajian{height: 0.66rem;float: right;}
.shop-jian{height: 0.64rem;border: 1px solid #cecece;float: left;font-size: 0.2rem;width: 1.16rem;
line-height: 0.64rem;text-align: center;color: #000000;}
.shop-shuliang{height: 0.64rem;border: 1px solid #cecece;float: left;font-size: 0.2rem;width: 1.16rem;
line-height: 0.64rem;text-align: center;color: #000000;}
.shop-jia{height: 0.64rem;border: 1px solid #cecece;float: left;font-size: 0.2rem;width: 1.16rem;
line-height: 0.64rem;text-align: center;color: #000000;}
.shop-zongdanprice{font-size: 0.34rem;color: #000000;margin-top: 1.13rem;float: right;}
</style>

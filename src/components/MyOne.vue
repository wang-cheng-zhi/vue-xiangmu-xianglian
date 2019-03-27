<template>
  <div class="myone">
    <div class="head">
      <p>素白{{nickName}}</p>
      <div class="touxiang">
        <img :src='touxiang' alt="">
      </div>
    </div>
    <ul class="user">
      <router-link tag="li" :to="{name:'UserInfo'}">
        <van-icon name="manager" />
        <p>我的资料</p>
      </router-link>
      <router-link tag="li" :to="{name:'Setting'}">
        <van-icon name="setting" />
        <p>账号设置</p>
      </router-link>
    </ul>
    <ul class="xing">
      <router-link to="xzsc">
        <img src="../assets/images/myone4.jpg" alt="星钻商城">
      </router-link>
      <router-link to="wkzq">
        <img src="../assets/images/myone3.jpg" alt="挖矿专区">
      </router-link>
      <router-link to="xlzh">
        <img src="../assets/images/myone2.jpg" alt="星链账户">
      </router-link>
    </ul>
    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        <br>
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        <br>
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        <br>
        待收货
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        <br>
        评价/售后
      </van-col>
    </van-row>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我的收货地址" is-link />
    </van-cell-group>
    <div class="tuichu">
      <van-button round type="warning" size="large">退出登录</van-button>
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
export default {
  data() {
    return {
      active:3,
      nickName:"",
      touxiang:require ("../assets/images/mytoux.png")
    }
  },
  mounted() {
    this.$emit("footactive", this.active);
  }
  // components: {
  //   [Row.name]: Row,
  //   [Col.name]: Col,
  //   [Icon.name]: Icon,
  //   [Cell.name]: Cell,
  //   [CellGroup.name]: CellGroup
  // }
};
</script>

<style scoped>
.myone{margin-bottom:4rem}
.head{
  height:4.09rem;background:url(../assets/images/myone1.jpg) no-repeat;
  background-size:cover;
  position: relative;
}
.head p{
  color:#fffeff;font-size:1rem;
  padding:1.8rem 2.2rem;
}
.touxiang img{
  display:block;width:2.46rem;height:2.46rem;
}
.touxiang{
  position: absolute;
  right:0.6rem;
  bottom:-1.6rem;
  width:2.46rem;height:2.46rem;
  border:0.05rem solid #fff;
  border-radius:50%;
  overflow:hidden;
  z-index:10;
}
.user-links{font-size:1rem;padding:0.25rem;text-align:center}
.user{
  display:flex;
  padding:0 0.2rem;
  width:7rem;
  margin-top:-0.25rem;
  margin-bottom:0.7rem
}
.user li{
  text-align:center;
  margin:0 auto;
}
.user .van-icon{
  font-size:1rem;
  color:#fc3e6a;
}
.user p{font-size:0.8rem}
.xing{
  height:2.5rem;
  padding:0.2rem;
  display:flex;
  justify-content:space-around
}
.xing img{display:block;width:3.2rem;}
.van-cell-group .van-cell{font-size:1rem}
.van-cell-group .van-icon{font-size:1rem}
.van-cell{padding:0.5rem}
.tuichu{width:7rem;margin:0 auto;height: 1.5rem;}
.van-button{font-size:0.8rem;height:3rem;}

/* .user {
  &-poster {
    width: 100%;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}*/
</style>

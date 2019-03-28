<template>
  <div>
    <van-nav-bar title="商品订单" left-text right-text left-arrow @click-left="onClickLeft"/>
    <van-tabs v-model="active">
      <van-tab title="全部"><Order_A></Order_A></van-tab>
      <van-tab title="待付款"><Order_B></Order_B></van-tab>
      <van-tab title="待发货"><Order_C></Order_C></van-tab>
      <van-tab title="待收货"><Order_D></Order_D></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Order_A from './order/Order_A'
import Order_B from './order/Order_B'
import Order_C from './order/Order_C'
import Order_D from './order/Order_D'
export default {
  data() {
    return {
      active:0
    };
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    }
  },
  components:{
    Order_A,
    Order_B,
    Order_C,
    Order_D
  }
};
</script>

<style scoped>
</style>

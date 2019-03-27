<template>
  <div>
    <!-- <van-tabbar :fixed="false" >
      <van-tabbar-item icon="coupon-o" size="2em">新人专享</van-tabbar-item>
      <van-tabbar-item icon="gift-o">开始赚钱</van-tabbar-item>
      <van-tabbar-item icon="new-o">每日上新</van-tabbar-item>
      <van-tabbar-item icon="flower-o">中外名酒</van-tabbar-item>
      <van-tabbar-item icon="refund-o">满减大促</van-tabbar-item>
    </van-tabbar>-->

    <div class="w">
      <van-row class="w-top" type="flex" justify="space-between">
        <van-col span="4"><van-icon name="coupon-o" size="3.3em" color="#f646d5"/></van-col>
        <van-col span="4"><van-icon name="gift-o" size="3.3em" color="#9c4de6"/></van-col>
        <van-col span="4"><van-icon name="new-o" size="3.3em" color="#ef853b"/></van-col>
        <van-col span="4"><van-icon name="flower-o" size="3.3em" color="#ed4962"/></van-col>
        <van-col span="4"><van-icon name="refund-o" size="3.3em" color="#6d77fa"/></van-col>
      </van-row>
      <van-row class="w-buttom" type="flex" justify="space-between">
        <van-col span="4">新人专享</van-col>
        <van-col span="4">开始赚钱</van-col>
        <van-col span="4">每日上新</van-col>
        <van-col span="4">中外名酒</van-col>
        <van-col span="4">满减大促</van-col>
      </van-row>
    </div>
    <img class="ti1" src="../../assets/images/ti1.gif" alt="">
    <div class="ti2">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:0,
    };
  }
};
</script>

<style scoped>
.w{
  padding: 5px 15px
}
.w-buttom{
  font-size: 0.8rem
}
.ti1{
  width: 92%;
  padding: 0 15px
}
.ti2{
  width: 92%;
  height: 10rem;
  padding: 0 15px;
  border-bottom: 1px solid #cecece;
}
</style>

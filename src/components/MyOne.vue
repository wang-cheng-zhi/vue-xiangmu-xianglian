<template>
  <div>
    <img class="log" src="../assets/img/myone1.jpg" alt="">
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        待收货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        待评价/售后
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:3
    }
  },
  mounted(){
		this.$emit("footactive",this.active)
  },
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
.log{width:27.5rem}
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

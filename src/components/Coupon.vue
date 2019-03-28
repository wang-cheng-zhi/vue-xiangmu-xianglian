<template>
  <div>
     <header>
      <van-nav-bar title="优惠卷" left-text="返回" left-arrow  @click-left="ToMyOne()">
        <van-icon  slot="right" />
      </van-nav-bar>
    </header>
    <section>
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />

      <van-popup v-model="showList" position="bottom">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
</van-popup>

    </section>
  </div>
</template>

<script>

var a = (new Date()).getTime()/1000;
var b = (new Date("2019-05-20")).getTime()/1000;

const coupon = {
  available: 5,
  condition: '无使用门槛',
  reason: '',
  value: 150,
  name: '星链友店',
  startAt: a,
  endAt: b,
  valueDesc: '12',
  unitDesc: '元'
};


export default {
  name:"Coupon",
  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList:""
    }
  },
  methods: {
    ToMyOne(){
      history.go(-1)
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  },

}
</script>

<style scoped="">

</style>

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
        <van-col span="4">
          <van-icon name="coupon-o" size="3.3em" color="#f646d5"/>
        </van-col>
        <van-col span="4">
          <van-icon name="gift-o" size="3.3em" color="#9c4de6"/>
        </van-col>
        <van-col span="4">
          <van-icon name="new-o" size="3.3em" color="#ef853b"/>
        </van-col>
        <van-col span="4">
          <van-icon name="flower-o" size="3.3em" color="#ed4962"/>
        </van-col>
        <van-col span="4">
          <van-icon name="refund-o" size="3.3em" color="#6d77fa"/>
        </van-col>
      </van-row>
      <van-row class="w-buttom" type="flex" justify="space-between">
        <van-col span="4">新人专享</van-col>
        <van-col span="4">开始赚钱</van-col>
        <van-col span="4">每日上新</van-col>
        <van-col span="4">中外名酒</van-col>
        <van-col span="4">满减大促</van-col>
      </van-row>
    </div>
    <img class="ti1" src="../../assets/images/ti1.gif" alt>
    <div class="ti2">
      <div class="ti2-left">
        <img class="ti3" src="../../assets/images/ti2.gif" alt>
      </div>
      <div class="ti2-right">
        <img class="ti3" src="../../assets/images/ti3.gif" alt>
        <img class="ti3" src="../../assets/images/ti4.gif" alt>
      </div>
    </div>

    <van-row class="di">
      <van-col span="8" class="toj1">
        <span class="custom-text">友店爆料</span>
        <van-tag color="#f2826a" plain>重磅</van-tag>
      </van-col>
      <van-col span="15" class="toj2">
        <van-notice-bar
          text="《星链通证经济白皮书》首发，以“见证未来”为主题的星链·供应链云暨《星链通证经济白皮书》发布会，在深圳隆重举行。"
          background="#ffffff"
          color="#000"
        />
      </van-col>
    </van-row>

    <div class="bk">
      <h4>本周爆款</h4>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped>
.w {
  padding: 5px 15px;
}
.w-buttom {
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  text-align: center
}
.ti1 {
  width: 92%;
  padding: 0 15px;
}
.ti2 {
  width: 92%;
  height: 9rem;
  margin: 0 15px;
  border-bottom: 1px solid #cecece;
}
.ti2 .ti2-left {
  width: 54%;
  float: left;
}
.ti2 .ti2-right {
  width: 45%;
  float: right;
}
.di{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
}
.ti3 {
  width: 100%;
}
.toj1 {
  margin: 8px 0px;
  margin-left: 0.8rem;
  width:30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.toj2{
  width: 55%
}
.bk{
  width: 92%;
  text-align: center;
  margin: 0 4%;
  color: #696969
}


</style>

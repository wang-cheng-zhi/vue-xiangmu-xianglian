<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text=""
      right-text="新用户"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />



  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods:{
    onClickLeft() {
      history.go(-1)
    },
    onClickRight() {

    }
  }
};
</script>

<style scoped>
</style>

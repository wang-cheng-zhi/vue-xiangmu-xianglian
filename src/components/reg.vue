<template>
  <div>
    <van-nav-bar
      title="新用户注册"
      left-text
      right-text
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="loginbg">
      <img src="../assets/images/Login.gif" alt>
    </div>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
      <div class="tishi">
        <span>*</span>
        <span>可使用星链生活账号密码登录</span>
      </div>
    </van-cell-group>


    <van-button type="info" round size="large" @click="reg">注册</van-button>
  </div>
</template>

<script>
import { post } from "axios";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {},
    reg() {
      // http://10.8.164.6:8000/app/login
      post("http://api.cat-shop.penkuoer.com/api/v1/auth/reg", {
        userName: this.username,
        password: this.password
      })
        .then(res => {
          console.log(res);
          if(res.data.code=="success") {
            this.$router.push('/login')
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.loginbg {
  height: 16rem;
  text-align: center;
}
.loginbg img {
  width: 100%;
}
.loginbg {
  font-weight: 500;
  font-size: 1.4rem;
}
.tishi{
  color: #696969;
  font-size: 0.8rem;
  margin: 2% 6%;
}
.van-field{
  width: 90%;
  margin: 0% 5%
}

</style>

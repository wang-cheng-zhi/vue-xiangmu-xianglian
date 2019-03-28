<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text
      right-text="新用户"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="loginbg">
      <img src="../assets/images/Login.gif" alt>
      <p>密码登录</p>
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
    </van-cell-group>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { post } from 'axios'
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
    login() {
      post("http://10.8.164.6:8000/app/login", {
        username: this.username,
        password: this.password
      })
        .then(res => {
          console.log(res);
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
  height: 18rem;
  text-align: center;
}
.loginbg img {
  width: 100%;
}
.loginbg {
  font-weight: 500;
  font-size: 1.4rem;
}
</style>

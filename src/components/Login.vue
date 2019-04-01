<template>
  <div id="out">
    <van-nav-bar
      title="登录"
      left-text
      left-arrow=""
      right-text="新用户"
      @click-left="onClickLeft()"
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
      <div class="tishi">
        <span>*</span>
        <span>可使用星链生活账号密码登录</span>
      </div>
    </van-cell-group>

    <van-button type="info" round size="large" @click="login">登录</van-button>
    <van-row>
      <van-col span="6" offset="1">忘记密码</van-col>
      <van-col span="8" offset="8">短信验证码登录</van-col>
    </van-row>
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
      this.$router.push('/')
    },
    onClickRight() {
      this.$router.push("/reg");
    },
    login() {
      post("https://api.cat-shop.penkuoer.com/api/v1/auth/login", {
        userName: this.username,
        password: this.password
      })
        .then(res => {
          if (res.data.code == "success"  ) {
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("user", JSON.stringify(this.username));
          this.$router.push({
            name:'Index'
          })
            // this.$toast('登录成功');
            this.$toast.loading({
              mask:true,
              duration:1000,
              message:'正在跳转...'
            })
          }else{
            this.$toast(res.data.message)
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
#out{
  height: 100vh;
}
.loginbg {
  height: 19rem;
  text-align: center;
}
.loginbg img {
  width: 100%;
}
.loginbg p{
  font-weight: 500;
  font-size: 1.4rem;
}
.tishi {
  color: #696969;
  font-size: 0.8rem;
  margin: 2% 6%;
}
.van-field {
  width: 90%;
  margin: 0% 5%;
}
.van-button {
  margin-top: 2%;
  width: 90%;
  margin: 3% 5%;
}
</style>

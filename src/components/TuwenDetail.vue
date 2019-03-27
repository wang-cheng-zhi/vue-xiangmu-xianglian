<template>
  <div>
   <header>
      <van-nav-bar title="图文详情" left-text="返回" @click-left="ToDetail()" left-arrow @click-right="ToShop()">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </header>
    <section>
      <div>
        <img src="../images/Tuwen-Detail-1.jpg"/>
        <img src="../images/Tuwen-Detail-2.jpg"/>
        <img src="../images/Tuwen_Detail-3.jpg"/>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name:"TuwenDetail",
  data() {
    return {

    }
  },
  methods:{
    ToDetail(){
      history.go(-1)
    },
    ToShop(){
      this.$router.push("/shop")
    }
  }
}
</script>

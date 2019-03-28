<template>
  <div class="TuwenDetail">
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

<style scoped="">
.TuwenDetail img {width: 100%;}
</style>

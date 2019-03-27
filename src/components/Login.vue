<template>
  <div>
    <ul>
      <li><input type="text" v-model="userName"></li>
      <li><input type="password" v-model="password"></li>
      <li><input type="password" v-model="password"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userName:'',
        password:''
      }
    },
  }
</script>

<style scoped>

</style>

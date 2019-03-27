<template>
  <div>
    购物车
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:2,
    }
  },
  mounted(){
		this.$emit("footactive",this.active)
	}
};
</script>

<style scoped>

</style>

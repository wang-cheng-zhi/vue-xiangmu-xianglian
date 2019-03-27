<template>
  <div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:0,
    }
  },
  mounted(){
		this.$emit("footactive",this.active)
	}
};
</script>

<style scoped>

</style>

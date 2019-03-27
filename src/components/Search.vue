<template>
<div>
  发现
</div>
</template>

<script>
export default {
  data() {
    return{
      active:1,
    }
  },
  mounted(){
		this.$emit("footactive",this.active)
	}
};
</script>

<style scoped>

</style>

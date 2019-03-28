<template>
  <div>
    <header>
      <van-nav-bar title="新增地址" left-text="返回" left-arrow  @click-left="ToMyAddress()">
        <van-icon />
      </van-nav-bar>
    </header>
    <section>
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="收货人"
          right-icon="question-o"
          placeholder="请填写真实姓名，否则无法配送"
          @click-right-icon="$toast('question')"
        />

        <van-field
          v-model="password"
          type="text"
          label="手机号"
          placeholder="请输入手机号"
          required
        />

         <van-field
          v-model="addressdiqu"
          type="text"
          label="所在地区"
          placeholder="请填写所在地区"
          required
        />

         <van-field
          v-model="addressxiangxi"
          type="text"
          label="详细地址"
          placeholder="填写详细地址"
          required
        />

      <van-cell  title="设为默认地址"  />
      <van-switch v-model="checked" />
      </van-cell-group>
    </section>

    <footer>
      <button class="Add-wancheng" @click="ToMyAddress()">完成</button>
    </footer>
  </div>
</template>

<script>
export default {
  name:"AddMyAddress",
  data() {
    return {
      username:"李大",
      password:"1111",
      addressdiqu:"上海",
      addressxiangxi:"上海市黄浦区南京路",
       checked: true
    }
  },
  methods: {
    ToMyAddress(){
      history.go(-1)
    }
  },
}
</script>

<style>
.van-switch--on{font-size: 1.4rem;}
.Add-wancheng{width: 80%;height: 4rem;font-size: 1.2rem;color: deeppink;
border-radius: 0.8rem;background: #cecece;margin: 5rem 3rem 0 3rem;}

</style>


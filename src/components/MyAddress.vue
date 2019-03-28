<template>
  <div>
    <header>
      <van-nav-bar title="收获地址" left-text="返回" left-arrow  @click-left="ToMyOne()">
        <van-icon />
      </van-nav-bar>
    </header>
    <section>
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        @add="onAdd"
        @edit="onEdit"
      />
    </section>

  </div>
</template>

<script>
export default {
  name:"MyAddress",
  data() {
    return {
      chosenAddressId: '1',
      list:[
        {
          id: '1',
          name: '李大超',
          tel: '13223225689',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李项',
          tel: '18956478965',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
       disabledList:[
         {
          id: '3',
          name: '项原',
          tel: '13365489654',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
       ]
    }
  },
  methods: {
    ToMyOne(){
      history.go(-1)
    },
    onAdd() {
     this.$router.push("/addmyaddress")
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    }
  },
}
</script>

<style scoped="">

</style>

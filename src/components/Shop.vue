<template>
  <div>
    <header>
      <van-nav-bar title="商城" left-text="返回" left-arrow  @click-left="ToIndex()">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </header>
    <section>
      <div>
        <van-tree-select
          :items="items"
          :main-active-index="mainActiveIndex"
          :active-id="activeId"
          @navclick="onNavClick"
          @itemclick="onItemClick"
        >
        <van-card    tag="热卖" price="25.00"
          title="第一期 顶顶顶"  :thumb="imageURL">
          <van-button size="mini" >加入购物车</van-button>
        </van-card>
       </van-tree-select>
      </div>
    </section>
    <footer>
      <router-view @footactive="getactive" />
      <van-tabbar v-model="active" active-color="#fa2c5c">
        <van-tabbar-item icon="wap-home" :to="{ name: 'Index' }">首页</van-tabbar-item>
        <van-tabbar-item icon="search" :to="{ name: 'Search' }">发现</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" :to="{ name: 'Cart' }">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o" :to="{ name: 'MyOne' }">个人中心</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>


<script>
export default {
  name:"Shop",
  data() {
    return {
      active:2,
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1,
      imageURL:require("../images/cart-1.jpg"),
      items:[
        {
          text: '全部分类',
          id:0
        },
        {
          text:'生活小家电',
          id:"1",
          children:[
            {
              text:'',
              id:""
            },
          ]
        },
        {
          text:'美的空调',
          id:"2",
          children:[

          ]
        },


      ]

    }
  },
  methods: {
    onNavClick(index) {
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      this.activeId = data.id;
    },
    ToIndex(){
      history.go(-1)
    },
    getactive(msg){
      this.active = msg;
      console.log(msg)
		}
  }

}
</script>


<style scoped="">

</style>

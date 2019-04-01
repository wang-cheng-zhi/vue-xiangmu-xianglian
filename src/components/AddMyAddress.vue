<template>
  <div>
    <header>
      <van-nav-bar title="新增地址" left-text="返回" left-arrow @click-left="back()" >
        <van-icon />
      </van-nav-bar>
    </header>
    <section>
     <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave()"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
    </section>
  </div>
</template>

<script>
import areaList from "@/assets/area/area.js"
export default {
  name:"AddMyAddress",
  data() {
    return {
      isDefault:true,
      content:[],
      areaList,
      searchResult:[
        { id: '1',
        name: '张三',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        }
      ],
      addressInfo:"",

    }
  },
  methods: {
    save(){
      console.log("1")
    },
    back() {
      history.go(-1);
    },
    onSave(content) {
      // let addr = new Object;
      // console.log('content');
      // console.log(content);
      var arr = document.getElementsByClassName("van-field__control").value();
      var sel = document.getElementsByClassName("van-switch--on").value();
      console.log(arr,sel)

      // let len = this.list.length + 1;
      // addr = {
      //   id:len,
      //   name:content.name,
      //   tel:content.tel,
      //   city:content.city,
      //   county:content.county,
      //   is_default:content.is_default,
      //   postal_code:content.postal_code,
      //   province:content.province,
      //   area_code:content.area_code,
      //   address:content.province+content.city+content.county+content.address_detail
      // };
      // let is_add = this.list.push(addr);
      //       // 判断是否选中默认
      //   if (content.is_default) {
      //     this.chosenAddressId = len;
      //   }
      //   if (is_add) {
      //     this.show1 = false;
      //   }
      //   console.log(this.list);
      //   this.list = listArr;
      //   this.list = [{
      //     id: '1',
      //     name: '张三',
      //     tel: '13000000000',
      //     address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
      //   }];
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>

<style>
.van-switch--on{font-size: 1.4rem;}
.Add-wancheng{width: 80%;height: 4rem;font-size: 1.2rem;color: deeppink;
border-radius: 0.8rem;background: #cecece;margin: 5rem 3rem 0 3rem;}

</style>


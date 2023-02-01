<template>
  <van-grid :column-num="3">
    <van-grid-item  v-if="emo_list.length>0" v-for="value in emo_list" :key="value.id"  style="width: 30%" @click="look_img(value.img_src)">
      <img v-lazy="value.img_src" style="width: 100%">
    </van-grid-item>
    <van-empty v-else description="这一栏还没有哦" style="width: 100%" />
  </van-grid>
  <van-overlay :show="show"  @click="model_close">
    <div class="wrapper">
      <div class="block">
        <img :src="model_img" style="width: 100%">
      </div>
    </div>
  </van-overlay>
</template>

<script lang="ts">
import {reactive, toRefs} from "vue";

export default {
  name: "table_component",
  props:{
    emo_list:{default:null}
  },
  setup(){
    let state=reactive({
      show: false,
      model_img:""
    })
    /**
     * 点击查看图片
     * */
    const look_img=(item:any)=>{
      console.log(item)
      state.show=true
      state.model_img=item
    }
    const model_close=()=>{
      state.show=false
      console.log(1111)
    }
    return{
      ...toRefs(state),
      look_img,
      model_close
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  background-color: #fff;
}
.block img{
  width: 100%;
  height: 100%;
}
</style>
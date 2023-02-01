<template>
  <van-tabs v-model:active="active" class="container" @click-tab="onClickTab">
    <van-tab v-for="i in tag_lists" :title="i.tag_name">
  <table_component :emo_list="avatar_list"/>
  <div class="block"></div>
    </van-tab>
  </van-tabs>
</template>

<script lang="ts">
import {getAllEmo, getTagEmo} from "../../service/api/emo";
import {reactive, ref, toRefs} from "vue";
import Table_component from "../../components/table_component.vue";
import { tagInt } from "../../type/tag";
import {getTags} from "../../service/api/tags";

export default {
  name: "index",
  components: {Table_component},
  setup(){
    const active = ref(0);
    let state=reactive({
      avatar_list:[],
      tabList:[] as tagInt[],
      tag_lists:[]
    })
    /**
     * 获取所有的数据
     * */
    const getAll=async () => {
      const {data} = await getAllEmo()
      console.log(data)
      let flag=[]
      data.forEach((item:any)=>{
        if (item.tag_belong==='1'&&item.tag_name==='男生头像'){
          flag.push(item)
        }
      })
      state.avatar_list=flag
      console.log(state.avatar_list);
    }
    getAll()
    const onClickTab = async (title: any) => {
      console.log(title.title);
      await get_avatar_by_tag(title.title)
    }
    /**
     * 通过标签获取到当前的一个数据
     * */
    const get_avatar_by_tag=async (param:any) => {
      const {data} = await getTagEmo(param)
      console.log(data,'输出该标签的数据')
      state.avatar_list=data
    }
    get_avatar_by_tag('男生头像')
    /**
     * 标签获取
     * */
    const getAllTags=async () => {
      const {data} = await getTags();
      console.log(data, '输出所有的tags')
      data.forEach((item: any) => {
        if (item.tag_belong === '1') {
          state.tag_lists.push(item)
        }
      })
    }
    getAllTags()
    return{
      getAll,
      ...toRefs(state),
      active,
      onClickTab,
      // get_avatar_by_tag
    }
  }
}
</script>

<style scoped>
.block{
  height:50px;
}
</style>
<template>
  <a-spin :spinning="loading">
  <table_component :table-list="emo_lists" :tag-lists="all_tags"></table_component>
  </a-spin>
</template>

<script>
import {reactive, toRefs} from "vue";
import {getAllEmo} from "../../../service/api/emo.js";
import Table_component from "../components/table_component.vue";
import {getTags} from "../../../service/api/tags.js";

export default {
  name: "avatar_page",
  components: {Table_component},
  setup(){
    let state=reactive({
      emo_lists:[],
      loading:true,
      all_tags:[]
    })
    /**
     * 获取所有emo的数据
     * */
    const get_all_emos=async () => {
      const {data} = await getAllEmo()
      data.forEach(item=>{
        if (item.tag_belong==='1'){
          state.emo_lists.push(item)
        }
      })
      state.loading=false
      console.log(state.emo_lists,'输出所有的获取的头像数据')
    }
    get_all_emos()
    /**
     * 获取所有的标签
     * */
    const getAllTags=async () => {
      const {data} = await getTags();
      console.log(data,'获取所有头像的tags')
      data.forEach(item=>{
        if (item.tag_belong==='1'){
          state.all_tags.push(item)
        }
      })
    }
    getAllTags()
    return{
      ...toRefs(state),
      get_all_emos,
      getAllTags
    }
  }
}
</script>

<style scoped>

</style>
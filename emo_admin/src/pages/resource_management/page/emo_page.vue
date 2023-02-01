<template>
  <a-spin :spinning="loading">
  <table_component :tableList="emo_lists" :tagLists="all_tags"/>
  </a-spin>
</template>

<script>
import Table_component from "../components/table_component.vue";
import {getAllEmo} from "../../../service/api/emo.js";
import {reactive, toRefs} from "vue";
import {getTags} from "../../../service/api/tags.js";
export default {
  name: "emo_page",
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
        if (item.tag_belong==='0'){
          state.emo_lists.push(item)
        }
      })
      state.loading=false
      console.log(state.emo_lists,'输出所有的获取的相应数据')
    }
    get_all_emos()
    /**
     * 获取所有的标签
     * */
    const getAllTags=async () => {
      const {data} = await getTags();
      console.log(data,'获取所有的tags')
      data.forEach(item=>{
        if (item.tag_belong==='0'){
          state.all_tags.push(item)
        }
      })
    }
    getAllTags()
    return{
      ...toRefs(state),
      getAllTags
    }
  }
}
</script>

<style scoped>

</style>
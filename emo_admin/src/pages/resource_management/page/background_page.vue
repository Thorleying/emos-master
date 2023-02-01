<template>
  <a-spin :spinning="loading">
  <table_component :table-list="emo_lists"/>
  </a-spin>
</template>

<script>
import {reactive, toRefs} from "vue";
import {getAllEmo} from "../../../service/api/emo.js";
import Table_component from "../components/table_component.vue";
export default {
  name: "background_page",
  components: {Table_component},
  setup() {
    let state = reactive({
      emo_lists: [],
      loading:true
    })
    /**
     * 获取所有emo的数据
     * */
    const get_all_emos = async () => {
      const {data} = await getAllEmo()
      data.forEach(item => {
        if (item.tag_belong === '2') {
          state.emo_lists.push(item)
        }
      })
      state.loading=false
      console.log(state.emo_lists, '输出所有的获取的壁纸数据')
    }
    get_all_emos()
    return {
      ...toRefs(state),
      get_all_emos
    }
  }
}
</script>

<style scoped>

</style>
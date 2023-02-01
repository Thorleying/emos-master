<template>
<table_component :emo_list="background_lists"/>
</template>

<script lang="ts">
import Table_component from "../../components/table_component.vue";
import {reactive, ref,toRefs} from "vue";
import {tagInt} from "../../type/tag";
import {getAllEmo} from "../../service/api/emo";
export default {
  name: "index",
  components: {Table_component},
  setup() {
    let state = reactive({
      background_lists: [],
    })
    /**
     * 获取所有的数据
     * */
    const getAll=async () => {
      const {data} = await getAllEmo()
      console.log(data)
      data.forEach((item:any)=>{
        if (item.tag_belong==='2'){
          state.background_lists.push(item)
        }
      })
      console.log(state.background_lists);
    }
    getAll()
    return{
      ...toRefs(state)
    }
  }
}
</script>

<style scoped>

</style>
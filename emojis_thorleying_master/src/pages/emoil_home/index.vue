<template>
  <van-tabs v-model:active="active" class="container" @click-tab="onClickTab">
    <van-tab v-for="i in tabList" :title="i.tag_name">
      <table_component :emo_list="emo_list"/>
    </van-tab>
    <div class="body"></div>
  </van-tabs>

</template>

<script lang="ts">
import {getAllEmo, getTagEmo} from "../../service/api/emo";


interface emosInt{
  id:string;
  img_src:string;
  tag_name:string;
  tag_belong:string;
}
import {reactive, ref, toRefs} from "vue";
import {getTags} from "../../service/api/tags";
import { useIntersectionObserver } from "@vueuse/core";
import Table_component from "../../components/table_component.vue";
import { tagInt } from "../../type/tag";

export default {
  name: "index",
  components: {Table_component},
  setup() {
    const active = ref(0);
    let state=reactive({
      show:false,
      tabList:[] as tagInt[],
      emo_list:[] as emosInt[],
      all_emo_list:[]
    })
    const onClickTab = async (title: any) => {
      console.log(title.title);
      await get_emos_by_tag(title.title)
    }
    /**
     * 通过标签获取
     * */
    const get_emos_by_tag=async (param: any) => {
      const {data} = await getTagEmo(param)
      console.log(data, '输出所有该标签的data')
      state.emo_list=[]
      state.emo_list = data
    }
    /**
     * 获取推荐
     * */
    const list=async () => {
      await get_emos_by_tag('推荐')
    }
    list()
    /**
     * 获取所有的数据
     * */
    const getAll=async () => {
      const {data} = await getAllEmo()
      state.all_emo_list=data
    }
    getAll()
    /**
     * 获取所有的tags
     * */
    const getTagsData=async () => {
      const {data} = await getTags();
      console.log(data,'输出所有的tags')
      let flag=[] as any;
      data.forEach((item:any)=>{
        if (item.tag_belong==='0'){
          flag.push(item)
        }
      })
      console.log(flag,'输出所有的tags')
      state.tabList=flag
    }
    getTagsData()
    return { active,...toRefs(state),onClickTab,getTagsData,list,getAll,get_emos_by_tag};
  },
}
</script>

<style scoped>
.container{
  margin-top:10px;
}
.body{
  height: 50px;
}
</style>
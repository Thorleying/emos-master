<template>
  <div v-if="tagLists">
    筛选标签： <a-select
      ref="select"
      v-model:value="select_value"
      style="width: 120px;margin-bottom: 5px"
  >
    <a-select-option v-for="i in tagLists" :key="i" :value="i.tag_name">{{i.tag_name}}</a-select-option>
  </a-select><a-button type="primary" @click="sift_tag">点击筛选</a-button>
  </div>
  <a-table :columns="columns" :data-source="tableLists" :scroll="{ x: 200, y: 440 }">
    <template #bodyCell="{ column,record }">
      <template v-if="column.key === 'img_src'">
        <img :src="record.img_src" style="width:100px;height: 100px"/>
      </template>
      <template v-if="column.key === 'tag_belong'">
        <a-tag color="#f50">{{record.tag_belong==='0'?'表情包':record.tag_belong==='1'?'头像':'壁纸'}}</a-tag>
      </template>
      <template v-if="column.key === 'time'">
        {{ record.time }}
      </template>
      <template v-if="column.key === 'operation'">
        <a-button type="primary" size="small">编辑</a-button>
        <a-button style="margin-left: 5px" type="danger" size="small" @click="del_emo_obj(record)">删除</a-button>
      </template>
    </template>
  </a-table>
</template>
<script>
import {defineComponent, reactive, ref, toRefs} from 'vue';
import {getTags} from "../../../service/api/tags.js";
import {delEmo, getTagEmo} from "../../../service/api/emo.js";
import {message} from "ant-design-vue";
const columns = [{
  title: '编号',
  width: 20,
  dataIndex: 'id',
  key: 'id',
  fixed: 'left',
}, {
  title: '表情图片',
  width:50,
  dataIndex: 'img_src',
  key: 'img_src',
  fixed: 'left',
}, {
  title: '标签',
  dataIndex: 'tag_name',
  key: 'tag_name',
  width: 50,
}, {
  title: '类型',
  dataIndex: 'tag_belong',
  key: 'tag_belong',
  width: 50,
}, {
  title: '上传时间',
  dataIndex: 'time',
  key: 'time',
  width: 60,
},{
  title: '操作',
  key: 'operation',
  fixed:'right',
  width: 50,
}];
export default defineComponent({
  props:{
    tableList:{default:null},
    tagLists:{default:null}
  },
  name:"table_component",
  setup(props) {
    let state=reactive({
      select_value:'',
      tableLists:props.tableList
    })
    /**
     * 点击筛选
     * */
    const sift_tag=async () => {
      console.log(state.select_value, state.tableLists)
      const {data} = await getTagEmo(state.select_value)
      console.log(data,'输出筛选的数据')
      state.tableLists=data
      message.success('筛选成功')
    }
    /**
     * 点击删除表情包
     * */
    const del_emo_obj=async (param) => {
      console.log(param.id, '输出删除的标签包的参数')
      const {data} = await delEmo(param.id)
      console.log(data,'输出删除的状态')
      if (data===1){
        message.success('删除成功')
        // ctx.emit('')
      }else{
        message.error('删除失败')
      }
    }
    return {
      columns,
      sift_tag,
      ...toRefs(state),
      del_emo_obj
    };
  },
});
</script>
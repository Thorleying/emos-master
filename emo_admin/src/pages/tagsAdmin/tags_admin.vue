<template>
  <a-button class="editable-add-btn" style="margin-bottom: 8px">Add</a-button>
  <div>
    <a-table bordered :data-source="tags_list" :columns="columns" style="width: 70%">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex==='tag_belong'">
          {{record.tag_belong==='0'?'表情包类标签':record.tag_belong==='1'?'头像类标签':'壁纸类标签'}}
        </template>
        <template v-else-if="column.dataIndex==='operation'">
          <a-button size="small" type="primary">编辑</a-button>
          <a-button size="small" type="danger" style="margin-left: 10px" @click="del_tag_obj(record)">删除</a-button>
        </template>
      </template>
    </a-table>
  </div>
<input type="text" placeholder="标签名" v-model="tag_name">
<select v-model="select_value">
  <option value="1">头像</option>
  <option value="0">表情包</option>
  <option value="2">壁纸</option>
</select>
  <button @click="add_tag">点击添加标签</button>
</template>

<script>
import { computed, toRefs, reactive, ref } from 'vue';
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
import {getTags} from "../../service/api/tags.js";
export default {
  name: "tags_admin",
  components: {
    CheckOutlined,
    EditOutlined,
  },
  setup(){
    let state=reactive({
      select_value:'',
      tag_name:"",
      tags_list:[]
    })
    /**
     * 点击添加标签
     * */
    const add_tag=()=>{
      console.log(state.select_value,state.tag_name)
      const obj={tag_name:state.tag_name,tag_belong:state.select_value}
    }
    const columns = [{
      title: '编号',
      dataIndex: 'id',
    }, {
      title: '标签名',
      dataIndex: 'tag_name',
    }, {
      title: '标签类型',
      dataIndex: 'tag_belong',
    }, {
      title: '操作',
      dataIndex: 'operation',
      width:'30%'
    }];
    const count = computed(() => state.tags_list.length + 1);
    /**
     * 获取所有的tags 标签 get
     * */
    const getAllTags=async () => {
      const {data} = await getTags()
      console.log(data,'获取标签')
      state.tags_list=data
    }
    getAllTags()
    /**
     * 点击删除 标签
     * */
    const del_tag_obj=(param)=>{
      console.log(param,'输出传参')
    }
    return{
      ...toRefs(state),
      add_tag,
      columns,
      count,
      getAllTags,
      del_tag_obj
    }
  }
}
</script>

<style scoped>

</style>
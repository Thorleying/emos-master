
<template>
  <input type="file" @change="changeFile">
  <img :src="img_src" style="width: 100px;">
  <br>
  类型:<select v-model="select_value" @change="changeTypeValue(this)">
  <option value="1">头像</option>
  <option value="0">表情包</option>
  <option value="2">壁纸</option>
</select>
  标签:<select v-model="select_value_tag">
  <option v-for="i in tags" :key="i" :value="i.tag_name">{{ i.tag_name }}</option>
</select>
  <button @click="sub">点击上传</button>
</template>
<script>
import {reactive, toRefs} from "vue";
import axios from "axios";
import {getTags, getTagsInfo} from "../../service/api/tags.js";
import {upload_emo} from "../../service/api/emo.js";

export default {
  name:'index',
  setup(){
    let state=reactive({
      fileData:"",
      img_src:"",
      select_value:'',
      select_value_tag:'',
      tags:[]
    })
    const changeFile = (e) => {
      const file = e.target.files[0];
      state.fileData=file;
      console.log("file::::", file);
      setTimeout(()=>{
        upload()
      },100)
    }
    /**
     * 上传接口
     * */
    const upload=()=>{
      if(!state.fileData){
        alert('请选择文件')
      }else{
        let flag=state.fileData.name;
        console.log("https://thorleying.work/bbq/upload/"+flag)
        let formData = new FormData();
        formData.append("file", state.fileData);
        axios({
          url:'https://thorleying.work/bbq/uploadImg.php',
          method:"post",
          data: formData,
        }).then(async res => {
          console.log(res.data)
          state.img_src="https://thorleying.work/bbq/upload/"+flag
        })
      }
    }
    /**
     * 点击提交
     * */
    const sub=async () => {
      const obj = {img_src: state.img_src, tag_name: state.select_value_tag, tag_belong: state.select_value}
      console.log(obj);
      const {data} = await upload_emo(obj);
      console.log(data,'输出上传之后的状态')
      if (data===1){
        console.log('success')
      }
    }
    /**
     * 获取所有的tag
     * */
    const getAllTags=async () => {
      const {data} = await getTags()
      console.log(data,'输出所有的data')
    }
    /**
     * 类型更改的监听
     * */
    const changeTypeValue=async (that) => {
      console.log(that.select_value);
      const {data} = await getTagsInfo(that.select_value)
      console.log(data,'输出这个类型的所有标签')
      state.tags=data
    }
    getAllTags()
    return{
      changeFile,
      upload,
      ...toRefs(state),
      sub,
      getAllTags,
      changeTypeValue
    }
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

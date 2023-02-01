<template>
  <van-tabbar v-model="refKey" class="footer">
      <van-tabbar-item v-for="i in routers" :key="i.pathName" @click="run_the_path(i)">
        <span>{{ i.title }}</span>
        <template #icon="props">
          <img :src="i.src" />
        </template>
      </van-tabbar-item>
  </van-tabbar>

</template>

<script lang="ts">
import { showNotify } from "vant";
import {reactive, ref, toRefs} from "vue";
import {useRoute, useRouter} from "vue-router";

export default {
  name: "footer_component",
  setup() {
    const router=useRouter()
    const route=useRoute()
    const routerList =reactive( {
      refKey:0,
      routers:[
        {
          pathName:'/emo',title:'表情包',src:"https://img.zcool.cn/community/0132255a604c8da80120121f36db45.gif"
        },
        {
          pathName:'/avatar',title:'头像',src:"https://img.zcool.cn/community/0149915a604c72a8012113c7d764a3.gif"
        },
        {
          pathName:'/background',title:'壁纸',src:"https://ts1.cn.mm.bing.net/th/id/R-C.3acc46c9f7f0389d6a8d16b18a386785?rik=5rc7p6R747qtGA&riu=http%3a%2f%2fpic.ntimg.cn%2ffile%2f20180427%2f25159533_215030378083_2.jpg&ehk=khkPJAkG%2f53A%2bLdTSfTJNJ4r2rmhdaWTqj0Whz%2b6GqQ%3d&risl=&pid=ImgRaw&r=0"
        }
      ]
    });

    /**
     * 点击跳转页面
     * */
    const run_the_path=(i:any)=>{
      console.log(route.path)
      // if (i.pathName!=='/emo'){
      //   showNotify({ message: '暂未开痛' });
      // }else {
      //   router.push({
      //     path:i.pathName
      //   })
      // }
      router.push({
        path:i.pathName
      })
    }
    return {
      ...toRefs(routerList),
      run_the_path
    };
  },
}
</script>

<style scoped>
.footer{
  position:fixed;
  z-index: 1;
  width: 100%
}
</style>
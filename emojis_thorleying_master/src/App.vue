<template>
<van-nav-bar title="表情壁纸大全" class="header"/>
  <div class="container">
    <router-view/>
  </div>
<footer_component/>
</template>
<script  lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Footer_component from "./components/footer_component.vue";
import {useRoute} from "vue-router";
import {onMounted, reactive, toRefs} from "vue";
export default {
  components:{Footer_component},

}
</script>

<style scoped>
body{
  position: relative;
}
.header{
  position:fixed;
  z-index: 1;
  width: 100%
}
.container{
  width: 100%;
  height:calc(100vh - 50px);
 padding-top: 30px;
}
</style>

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import Vant from 'vant';
import 'vant/lib/index.css';
import VueLazyload from 'vue-lazyload'
createApp(App).use(router).use(Vant).use(VueLazyload, {
    preLoad:1,
    error: 'https://thorleying.work/bbq/upload/1487817728509_ab7cfcbdf97111e6a95280e650026b90.gif',
    loading: 'https://thorleying.work/bbq/upload/R-C.gif',
    attempt: 1,
    throttleWait:200,
    listenEvents:['scroll']
}).mount('#app')

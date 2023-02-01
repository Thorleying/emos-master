
import axios from 'axios'
// https://thorleying.work/emo_admin
//http://localhost/emo_admin
axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'https://thorleying.work/emo_admin' : 'https://thorleying.work/emo_admin'
axios.interceptors.response.use((res:any) => {
    console.log(res.status,'输出状态吗')
    if (res.status===200){
        return res
    }
    alert('网络请求失败')
})
export default axios
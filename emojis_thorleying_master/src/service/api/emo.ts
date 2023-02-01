import axios from "../index";
/**
 * 获取这个标签所有的emo
 * */
export const getTagEmo=(param:any)=>{
    return axios.request({
            url: '/getTagEmo.php',
            method: "POST",
            params:{
              tag_name:param,
            }
        }
    )
}
export const getAllEmo=()=>{
    return axios.request({
            url: '/getAllEmo.php',
            method: "GET",
        }
    )
}
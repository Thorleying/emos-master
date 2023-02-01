import axios from "../index.js";
/**
 * 获取所有的tags
 * */
export const getTags=()=>{
    return axios.request({
            url: '/getTags.php',
            method: "GET"
        }
    )
}
/**
 * 类型 找到相应的标签
 * param
 * 1 0 2
 * */
export const getTagsInfo=(param)=>{
    return axios.request({
            url: '/getTagsInfo.php',
            method: "POST",
            params:{
                tag_belong:param
            }
        }
    )
}
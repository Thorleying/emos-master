import axios from "../index.js";
/**
 * 上传 表情
 * */
export const upload_emo=(param)=>{
    return axios.request({
            url: '/uploadEmo.php',
            method: "POST",
            params:{
                img_src:param.img_src,
                tag_name:param.tag_name,
                tag_belong:param.tag_belong
            }
        }
    )
}
/**
 * 获取所有的数据 包括壁纸 头像 表情包
 * */
export const getAllEmo=()=>{
    return axios.request({
            url: '/getAllEmo.php',
            method: "GET",
        }
    )
}
/**
 * 获取这个标签所有的emo
 * */
export const getTagEmo=(param)=>{
    return axios.request({
            url: '/getTagEmo.php',
            method: "POST",
            params:{
                tag_name:param,
            }
        }
    )
}
/**
 * 删除表情包 del_emo_obj
 * */
export const delEmo=(param)=>{
    return axios.request({
            url: '/del_emo_obj.php',
            method: "POST",
            params:{
                id:param,
            }
        }
    )
}
import axios from "../index";
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
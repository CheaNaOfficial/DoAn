

import axios from "axios";
import { Config } from "./helper";
import { message } from "antd";
import Cookies from "js-cookie"
const BASE_URL = "http://localhost:8081/api/";
const TOKEN = Cookies.get("token");
export const request = async (url="", method="get",data={}) =>{

    var param_get = "";
    if(method === "get" && Object.keys(data).length > 0){
        Object.keys(data).map((key,i)=>{
            param_get += (i == 0 ? "?" : "&")+key+"="+data[key]
        })
    }
    var headers = {'Content-Type' : 'application/json'}
    if(data instanceof FormData){ // check if param data is FormData
        headers = {'Content-Type' : 'multiipart/form-data'}
    }
    return axios({
        url : Config.base_url + url + param_get, //category/getlist
        method : method,
        data : data,
        headers : headers
    }).then(res=>{
        return res.data;
    }).catch(error=>{
        console.log(error);
        var status = error.response?.status
        if(status == 404){
            alert(error.message)
        }else if(status == 500){
            message.error(error.message)
        }
        return false;
    })
} 


export const TokenRequest = axios.create({
    baseURL: BASE_URL,
    headers: { authorization: `Bearer ${TOKEN}` },
  });
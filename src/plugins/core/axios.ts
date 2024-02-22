import axios from 'axios'
import { base_url } from '~/consts/const'
// import ls from '~/utils/Storage';
// import {  ACCESS_TOKEN } from '~/store/mutation-types';
export function initAxios() {


  // @ts-ignore
  axios.defaults.baseURL = base_url;
  axios.defaults.withCredentials = true;

  // const token = ls.get(ACCESS_TOKEN)
  // if(token){
  //   setToken(token)
  // }
}
export function setToken(token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
}
export default axios

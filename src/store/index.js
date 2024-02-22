import { createStore } from 'vuex'
import axios from 'axios';
let savedToken = localStorage.getItem('user_token');
let savedUser = localStorage.getItem('user');

if(savedToken){
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + savedToken;
}
const state = {
  locale:'MNG',
  user_token: savedToken ? savedToken : "",
  user: savedUser ? JSON.parse(savedUser) :null,
  language: '',
  languages: [
    {
      short: "mn",
      long: "Мон"
    },
    {
      short: "en",
      long: "Eng"
    },
  ],
}

localStorage.getItem('lang') != null ? state.language = localStorage.getItem('lang') : state.language = 'mn'
import mutations from "./mutations"
import getters from "./getters";
export default createStore({
  state,
  getters,
  mutations,
})

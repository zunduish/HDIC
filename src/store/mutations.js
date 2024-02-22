
import axios from "axios";
export default {
  setLanguage(state, lang) {
    state.language = lang;
    localStorage.setItem('lang', lang);
  },
  setUser (state, user) {
    state.user = {...user};
    localStorage.setItem('user', JSON.stringify(user))
  },
  setUserToken (state, token) {
    state.user_token = token
    localStorage.setItem('user_token', token);
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  },
  init(state, init) {
    state.token = init.token;
    window.locale = init.locale;
    state.locale = init.locale;

  },
}



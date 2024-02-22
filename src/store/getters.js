export default {
  language(state){
    return state.language
  },
  languages(state){
    return state.languages;
  },
  localeIndex(state){

    return state.languages.findIndex((language)=>language.code == state.locale);
  },
  locale(state){

    return state.locale;
  },
}

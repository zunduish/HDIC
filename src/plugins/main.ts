import { reactive } from "vue";
/*
* Plugins
* */
import VueAwesomeSwiper from 'vue-awesome-swiper'

import VueSocialSharing from 'vue-social-sharing'

import VueGtag from 'vue-gtag-next'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Antd from 'ant-design-vue';
import HighchartsVue from 'highcharts-vue';
import Highcharts from 'highcharts'



import apolloProvider from  "./core/apollo"
import store from '../store';

import { defineNuxtPlugin } from "#app";
import { initInlineSvg } from "./core/inline-svg";
import { initFilters } from "./core/filters";
import { initAxios } from "./core/axios";
import { initFontawesome } from "./core/fontawesome";
import {i18n} from '~/locales';
import {imageExistCheck} from "~/utils/image";

declare interface AppState {
  theme?: string;
  darkTheme?: boolean;
}

export default defineNuxtPlugin(({ vueApp: app }) => {

  initAxios();
  initInlineSvg(app);
  initFilters(app);
  initFontawesome(app);
  app.config.globalProperties.$filters = {
    imageExistCheck(value) {
      return imageExistCheck(value)
    }
  }

  app.use(VueGtag, {
    property: {
      id: 'G-NNSL6DKF5X'
    }
  });
  app.use(VueSocialSharing);
  app.use(HighchartsVue);
  app.use(store);
  app.use(apolloProvider);
  app.use(VueAwesomeSwiper);
  app.use(i18n);
  app.use(Antd);


  return {
    provide: {
      appState: reactive({
      }) as AppState,
    },
  };
});

declare module "#app" {
  interface NuxtApp {
    $appState: AppState;
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $appState: AppState;
  }
}

export {};

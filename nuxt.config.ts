import { resolve } from "path";
import { defineNuxtConfig } from "nuxt/config";
// import "src/assets/fonts/tt-commons";

// @ts-ignore
export default defineNuxtConfig({
  alias: {
    public: resolve(__dirname, "./public/"),
  },

  srcDir: "src/",

  dir: {
    public: resolve(__dirname, "./public/"),
  },

  css: [
    '@/assets/styles/tailwind.css',
    '~/assets/styles/ant_light.less',
    '~/assets/styles/ant_dark.less',
    '~/assets/styles/plugins.scss',
    "~/assets/styles/app.scss",
  ],

  vite:{
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            'primary-color': process.env.LAMBDA_PRIMARY_COLOR,
            'primary-color-dark-theme': process.env.LAMBDA_PRIMARY_COLOR },
          javascriptEnabled: true,
        },
        scss: {
          modifyVars: { 'primary-color': process.env.LAMBDA_PRIMARY_COLOR, 'primary-color-dark-theme': process.env.LAMBDA_PRIMARY_COLOR },
          additionalData: `
          $primary-color: ${process.env.LAMBDA_PRIMARY_COLOR};
          $ag-primary-color: ${process.env.LAMBDA_PRIMARY_COLOR};
          `,
        },
      },
    },
  },
  postcss: {
    config:true,
    plugins:{
      tailwindcss: {},
      autoprefixer: {},
    }
  },

  app:{
    head:{
      title: "HDIC",
      meta: [
        { name: "charset", content: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
        // { name: "url", content: 'https://beta.vetp.mn' },
        { name: "type", content: 'website' },
        { name: "title", content: 'HDIC' },
        { hid: "keywords", content: "Ус хангамж, ариутгах татуурга, Цэвэр бохир ус, техникийн нөхцөл, үерийн хамгаалалт, далан, суваг, усны барилга байгууламж, усны инженерчлэл, ус цэвэрлэгээ, хөрсний ус, ус зайлуулах байгууламж, барилгын зураг төсөл, инженерийн байгууламж, инженерийн шугам сүлжээ, усны байгууламж, борооны ус зайлуулах, шугамын холболт, борооны ус зайлуулах байгууламж, шугам сүлжээ, зөвлөх үйлчилгээ, төсөл боловсруулах, зөвлөгөө өгөх, Иженерийн бэлтгэл арга хэмжээ"},
        { hid: "description", content: 'HDIC' },
        // { name: "description", content: 'МЭРГЭЖЛИЙН БОЛОВСРОЛ СУРГАЛТ ТҮНШЛЭЛ' },
        // { property: "og:url", content: 'https://beta.vetp.mn' },
        { property: "og:type", content: "article" },
        // { property: "og:title", content: 'МЭРГЭЖЛИЙН БОЛОВСРОЛ СУРГАЛТ ТҮНШЛЭЛ' },
        // { property: "og:description", content: 'МЭРГЭЖЛИЙН БОЛОВСРОЛ СУРГАЛТ ТҮНШЛЭЛ' },
      ],
      link: [
        { rel: "icon", href: "/images/HDIClogo.jpg" },
      ],
    }
  },

  generate: {
    routes: ["/"],
  },
  ssr: false,
});

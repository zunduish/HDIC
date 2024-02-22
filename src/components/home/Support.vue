<template>
  <div v-if="loading" class="container mx-auto px-4 mb-40 flex animate-pulse">
    <div class="w-[150px] h-[100px] bg-gray-200 rounded-2xl mr-[40px]"/>
    <div class="w-[150px] h-[100px] bg-gray-200 rounded-2xl mr-[40px]" />
    <div class="w-[150px] h-[100px] bg-gray-200 rounded-2xl mr-[40px]" />
    <div class="w-[150px] h-[100px] bg-gray-200 rounded-2xl mr-[40px]" />
    <div class="w-[150px] h-[100px] bg-gray-200 rounded-2xl mr-[40px]" />
  </div>
  <div v-else id="swiper_style" class="TICKETS container mx-auto px-4 mb-40">
    <h4 class="text-2xl lg:text-3xl xl:text-4xl text-primary_color font-bold m-0">{{ $t("other.partners") }}</h4>
    <div class="-mt-10">
      <swiper :modules="modules"
              :slidesPerView="'auto'"
              :spaceBetween="20"
              :speed="700"
              :autoHeight="true"
              :navigation="true"
              :autoplay="{delay: 2000, disableOnInteraction: false,}"
              class=""
              :centeredSlides="false"
              :breakpoints="{
                 '375': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                 '414': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                  '640': {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  '768': {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  '1024': {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                  '1366': {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                }"
      >
        <swiper-slide data-hash="slide1" v-for="item in partners">
          <a-tooltip placement="top" color="grey">
            <template #title class="text-center">
              <span>{{getCurrentLanguage === 'mn' ? item.ner_mn : item.ner_en }}</span>
            </template>
            <div class="aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
              <a href="/" target="_blank">
                <img class="object-center object-contain h-24 w-full" :src="$filters.imageExistCheck(item.zurag)">
              </a>
            </div>
          </a-tooltip>
        </swiper-slide>
      </swiper>
    </div>
  </div>

</template>

<script>
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { StarOutlined } from '@ant-design/icons-vue';
import {GET_PARTNERS} from '../../graphql/queries';
import {mapGetters} from "vuex";

export default {
  name: 'Support',
  components: {
    Swiper,
    SwiperSlide,
    StarOutlined,
  },
  beforeMount() {
    this.getPartnerList();
  },
  data () {
    return {
      modules: [Autoplay, Navigation, Pagination],
      partners: [],
      loading: true
    }
  },
  methods:{
    getPartnerList() {
      this.$apollo.query({ query: GET_PARTNERS}).then((response) => {
        if (response.data.partners !== null){
          if (response.data.partners.length >= 1){
            this.partners =  response.data.partners;
            this.loading = false;
          }
        }
      });
    },
  },
  computed: {
    ...mapGetters([
      'languages',
      'language',
      // ...
    ]),
    getCurrentLanguage () {
      return this.$store.state.language;
    }
  },
}
</script>
<style scoped></style>

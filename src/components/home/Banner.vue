<template>
  <div v-if="loading" class="homeBanner w-full h-[550px] mx-auto mb-[80px] md:mb-[100px] lg:mb-[150px] bg-gray-200 animate-pulse " />
  <div v-else id="vetp_style" class="homeBanner mx-auto mb-[80px] md:mb-[100px] lg:mb-[150px]">
    <!-- Banner -->
    <div class="relative">
      <swiper
        :spaceBetween="0"
        :speed="2000"
        :navigation="true"
        :modules="modules"
        class="rounded-b-none"
        :autoplay="{delay: 2400, disableOnInteraction: false,}"
      >
        <swiper-slide data-hash="slide1" v-for="(banner, index) in home_banner" :key="index">
          <div class="relative w-full">
            <img class="" style="cursor:pointer; object-fit: cover; width: 100vw; height: 550px;"  :src="$filters.imageExistCheck(banner.zurag)" />
            <div class="bg-gradient-to-t from-black opacity-20 bg-black bg-opacity-50 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
            <div class="absolute top-0 bottom-0 w-full">
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import {Autoplay, Navigation, Pagination } from 'swiper'
import { GET_HOMEBANNER, IMAGE_URL } from '../../graphql/queries'
import { base_url } from '../../consts/const'
import {mapGetters} from "vuex";
export default {
  name: 'Banner',
  components: {
    Swiper,
    SwiperSlide,
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
  data () {
    return {
      IMAGE_URL: IMAGE_URL,
      base_url: base_url,
      loading: true,
      modules: [Autoplay, Navigation, Pagination],
      home_banner: [],
      loading: true,
    }
  },
  mounted () {
    this.GetHomebanner();
  },
  methods: {
    async GetHomebanner () {
      this.loading = true
      await this.$apollo.query({
        query: GET_HOMEBANNER,
        fetchPolicy: 'no-cache'
      }).then(({ data }) => {
        if (data.home_banner !== null){
          if (data.home_banner.length >= 1){
            this.home_banner =  data.home_banner;
            this.loading = false;
          }
        }
      });
    },
  },
}
</script>
<style scoped></style>

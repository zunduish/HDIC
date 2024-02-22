<template>
  <div class="container mx-auto px-4 mb-[100px] text-primary_color">
    <h4 class="text-2xl lg:text-3xl xl:text-4xl text-primary_color font-bold pt-6 pb-8 m-0">{{ $t("header.projects") }}</h4>
    <div>
      <!-- projects -->
      <div class="mx-5">
        <div class="grid md:grid-cols-12 flex items-center md:gap-4 pb-6" v-for="(item ,index) in data">

          <div class="col-span-12 md:col-span-4">
            <nuxt-link :to="'/projectdetail/'+item.id">
              <div class="relative cursor-pointer">
                <img alt="image" class="h-52 md:h-32 xl:h-40 rounded-lg w-full object-cover mb-2 md:mb-0" :src="$filters.imageExistCheck(item.zurag) "/>
                <div class="hover:bg-gradient-to-t from-black opacity-40 rounded-lg absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-span-12 md:col-span-8">
            <div class="">
              <p class="font-bold line-clamp-1 text-[20px] leading-4"
                  v-html="getCurrentLanguage === 'mn' ? item.title_mn : item.title_en">
              </p>
              <p class="line-clamp-1 text-[16px] leading-4"
                 v-html="getCurrentLanguage === 'mn' ? item.description_mn : item.description_en">
              </p>
              <p class="text-sm leading-4">{{dateFormat(item.medee_ognoo)}}</p>
            </div>
          </div>
        </div>
        <!--  Pagination  -->
        <div class="ctvet_pagination flex items-center justify-center pt-24">
          <a-pagination v-model:current="current_page" :total="total" :page-size="5" @change="GetProjects" show-less-items />
        </div>
      </div>
    </div>
  </div>
  <WebFooter/>
</template>
<script>
import { GET_PROJECTS, IMAGE_URL} from "../graphql/queries";
import {mapGetters} from "vuex";
import Moment from "moment";
import WebFooter from '~/components/layouts/default/WebFooter.vue'

export default {
  name: "projects",
  data() {
    return {
      newstype: [],
      total: 0,
      IMAGE_URL: IMAGE_URL,
      data: [],
      current_page: 1,
    }
  },
  components: {
    WebFooter
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
  mounted() {
    this.GetProjects();
  },
  methods: {
    dateFormat(value){
      let tvr =  value !== null ? value : "";
      return Moment(tvr).format("YYYY-MM-DD");
    },

    GetProjects() {
      this.$apollo.query({
        query: GET_PROJECTS,
        variables:  {page: this.current_page, size: 5}
      }).then(({ data }) => {
        if (data.paginate.projects !== null){
          if (data.paginate.projects.length >= 1){
            this.data = data.paginate.projects
            this.total = data.paginate.total;
          }
        }
      });
    },
  },
}
</script>

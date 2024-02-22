<template>
  <div v-if="loading" class="container mx-auto p-8 mb-40 flex text-justify min-h-[650px] bg-gray-200 rounded-2xl mt-[40px] animate-pulse">
    <div class=" w-[300px] h-[300px] rounded-2xl mr-[50px] bg-gray-300" />
    <div class="flex-wrap-reverse  pt-[30px]">
      <div class="w-[300px] h-[40px] bg-gray-300 rounded-2xl mb-[30px]" />
      <div class="w-[500px] h-[40px] bg-gray-300 rounded-2xl  mb-[30px]" />
      <div class="w-[200px] h-[40px] bg-gray-300 rounded-2xl" />
    </div>
  </div>

  <div v-else class="container mx-auto p-8 mb-40 flex text-justify min-h-[650px] mt-[30px] text-primary_color">
    <div class="w-[300px]">
      <img src="/images/HDIClogo.jpg" class="w-full rounded-lg mr-[50px]" alt="">
    </div>
    <div class="w-full pl-[60px]">
      <p class="text-[40px] text-center">{{getCurrentLanguage === 'mn' ? data.title_mn : data.title_en}}</p>
      <p class="box-decoration-clone text-[17px]">
        <span v-html="getCurrentLanguage === 'mn' ? data.description_mn : data.description_en" />
      </p>
    </div>
  </div>
  <WebFooter/>
</template>
<script>
import {mapGetters} from "vuex";
import WebFooter from '~/components/layouts/default/WebFooter.vue'
import {GET_PROJECT_DETAIL} from "../../graphql/queries";

export default {
  name: "projectdetail",
  data() {
    return {
      data: {},
      loading: true,
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
        query: GET_PROJECT_DETAIL,
        variables:  {id: this.$route.params.id.toString()}
      }).then(({ data }) => {
        if (data.projects !== null){
          if (data.projects.length >= 1){
            this.data = data.projects[0];
            this.loading = false;
          }
        }
      });
    },
  },
}
</script>
<style scoped></style>

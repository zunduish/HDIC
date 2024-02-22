<template>
  <footer class="relative">
    <div class="primary-background">
      <div class="container mx-auto p-4">
        <div class="w-full text-white text-[18px] lg:text-[16px] flex pt-6 grid grid-cols-1 lg:grid-cols-2 items-center">

          <!--              xayg-->
          <div class="w-full  pl-[10px]">
            <div class="">
              <div class="flex">
                <div class="w-[70px] lg:w-[95px] inline-flex">
                  <font-awesome-icon icon="map-location-dot" class="text-[25px] mx-auto mt-5" />
                </div>
                <div class="">
                  <p class="font-bold">{{$t("footer.address")}}: </p>
                  <p class="leading-6 font-light  mt-[5px] " >
                    {{$t("footer.address_text")}}</p>
                </div>
              </div>
            </div>

            <div class="mt-3">
              <div class="flex">
                <div class="w-[70px] lg:w-[95px] inline-flex">
                  <font-awesome-icon icon="phone" class="text-[25px] mx-auto mt-5" />
                </div>
                <div class="">
                  <p class="font-bold">{{$t("footer.phone")}}: </p>
                  <p class="leading-6 font-light mt-[5px]">99205000</p>
                  <p class="leading-6  font-light ">91117874</p>
                  <p class="leading-6 font-light ">99078498</p>
                </div>
              </div>

              <div class="flex mt-3">
                <div class="w-[70px] lg:w-[95px] inline-flex">
                  <font-awesome-icon icon="envelope" class="text-[25px] mx-auto mt-5" />
                </div>
                <div class="">
                  <p class="font-bold  font-bold">{{$t("footer.email")}}: </p>
                  <p class="leading-6  font-light mt-[5px]">info@hdic.mn</p>
                  <p class="leading-6  font-light ">hdic.mongolia@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

<!--          hash_tag_cont-->
          <div class=" lg:mt-[0px] mt-[30px]  mx-[10px] lg:py-[15px] lg:pr-[45px] w-full flex"  >
            <div style="box-sizing: content-box; display: inline-block;">
              <span class=" m-[5px] border rounded-full inline-flex py-[5px] p-[10px]" v-for="item in service_types">
                #{{item}}
              </span>
            </div>
          </div>

        </div>


<!--        fb logos-->
        <div class="md:flex items-center justify-between py-4 pb-4">
          <div class="text-xs lg:text-sm font-semibold text-white m-0">{{ $t("footer.hdic_copyright") }}</div>
          <div class="flex items-center justify-end space-x-6">
            <nuxt-link to="https://www.facebook.com/profile.php?id=100067788937226&mibextid=9R9pXO" target="_blank">
              <font-awesome-icon class="w-8 h-8 rounded-full text-white hover:text-gray-100 cursor-pointer" icon="fa-brands fa-facebook" />
            </nuxt-link>
            <nuxt-link to="https://twitter.com/home" target="_blank">
              <font-awesome-icon class="w-8 h-8 rounded-full text-white hover:text-gray-100 cursor-pointer" icon="fa-brands fa-twitter" />
            </nuxt-link>
            <nuxt-link to="https://www.youtube.com/" target="_blank">
              <font-awesome-icon class="w-8 h-8 rounded-full text-white hover:text-gray-100 cursor-pointer" icon="fa-brands fa-youtube" />
            </nuxt-link>

          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<script>

// #Ус хангамж  #ариутгах татуурга #Цэвэр бохир ус #техникийн нөхцөл #үерийн хамгаалалт #далан #суваг #усны барилга байгууламж #усны инженерчлэл #ус цэвэрлэгээ
// #хөрсний ус
// #ус зайлуулах байгууламж
// #барилгын зураг төсөл
// #инженерийн байгууламж
// #инженерийн шугам сүлжээ
// #усны байгууламж
// #борооны ус зайлуулах
// #шугамын холболт
// #борооны ус зайлуулах байгууламж
// #шугам сүлжээ
// #зөвлөх үйлчилгээ
// #төсөл боловсруулах
// #зөвлөгөө өгөх
// #Иженерийн бэлтгэл

// import {GET_CONTACT} from "../../../graphql/queries";
import {mapGetters} from "vuex";
import Moment from 'moment';

export default {
  data() {
    return {
      contact: {},
      current_page: 1,
      total: 0,
      check_contact: true,
      service_types: [
        "Ус хангамж",
        "ариутгах татуурга",
        "Цэвэр бохир ус",
        "техникийн нөхцөл",
        "үерийн хамгаалалт",
        "далан",
        "суваг",
        "усны барилга байгууламж",
        "усны инженерчлэл",
        "ус цэвэрлэгээ",
        "хөрсний ус",
        "ус зайлуулах байгууламж",
        "барилгын зураг төсөл",
        "инженерийн байгууламж",
        "инженерийн шугам сүлжээ",
        "усны байгууламж",
        "борооны ус зайлуулах",
        "шугамын холболт",
        "борооны ус зайлуулах байгууламж",
        "шугам сүлжээ",
        "зөвлөх үйлчилгээ",
        "төсөл боловсруулах",
        "зөвлөгөө өгөх",
        "Иженерийн бэлтгэл арга хэмжээ"
      ]
    };
  },
  beforeMount() {
    // console.log(this.service_types)
  },
  mounted() {
    const chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "1756128827971279");
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v16.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },
  methods:{
    gotop () {
      window.scrollTo(0, 0)
    },
    dateFormat(value){
      let tvr =  value !== null ? value : "";
      return Moment(tvr).format("MM/YYYY");
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


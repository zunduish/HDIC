<template>
  <header id="topnav" class="py-4 lg:py-0 change_color defaultscroll shadow sticky bg-white">
    <div class="container mx-auto	px-4 py-[10px]">
      <nav class="relative flex justify-between space-x-8 md:space-x-0">
        <div class="flex items-center space-x-4 md:space-x-8 lg:space-x-4">
          <nuxt-link aria-label="Home" to="/" >
            <div class="flex items-center">
              <img class="w-32 lg:w-[180px] py-0 pr-0 lg:py-4 lg:pr-4" src="/images/HDIClogo.jpg"/>
              <p class="text-[35px] ml-[15px] text-primary_color">{{$t("header.hdic_copyright")  }}</p>
            </div>
          </nuxt-link>
        </div>

        <div class="menu-active flex items-center">
          <div class="hidden lg:block mr-0 md:mr-8 space-x-8 font-medium  text-primary_color">
            <a-dropdown @click="getTabNumber('/')" :class="(tab_number === '/' ? 'border-b-[6px] border-primary_color' : 'border-none') + ' pb-[10px]'">
              <nuxt-link aria-label="Home" to="/" class="ant-dropdown-link " @click.prevent>{{ $t("header.header_about_us") }}</nuxt-link>
            </a-dropdown>
            <a-dropdown @click="getTabNumber('/projects')"  :class="(tab_number === '/projects' ? 'border-b-[6px] border-primary_color' : 'border-none') + ' pb-[10px]'">
              <nuxt-link aria-label="projects" to="/projects" class="ant-dropdown-link" @click.prevent>{{ $t("header.projects") }}</nuxt-link>
            </a-dropdown>
            <a-dropdown @click="getTabNumber('/activity')"  :class="(tab_number === '/activity' ? 'border-b-[6px] border-primary_color' : 'border-none') + ' pb-[10px]'">
              <nuxt-link aria-label="services" to="/activity" class="ant-dropdown-link" @click.prevent>{{ $t("header.activity") }}</nuxt-link>
            </a-dropdown>
            <a-dropdown @click="getTabNumber('/contact')"  :class="(tab_number === '/contact' ? 'border-b-[6px] border-primary_color' : 'border-none') + ' pb-[10px]'">
              <nuxt-link aria-label="contact" to="/contact" class="ant-dropdown-link" @click.prevent>{{ $t("header.contact") }}</nuxt-link>
            </a-dropdown>
          </div>

          <div class="hidden lg:block cursor-pointer w-6 h-6">
            <div class="" @click="changeAppLocale('mn')" v-if="getCurrentLanguage !== 'mn'">
              <img class="w-6 h-6" src="/images/mn_logo.png"/>
            </div>
            <div class="" @click="changeAppLocale('en')" v-if="getCurrentLanguage !== 'en'">
              <img class="w-6 h-6" src="/images/eng_logo.png"/>
            </div>
          </div>

          <!-- MOBILE -->
          <div class="lg:hidden">
            <button
              class="relative z-10 flex h-8 w-8 items-center justify-center"
              aria-label="Toggle Navigation" id="headlessui-popover-button-:r0:" type="button" aria-expanded="false"
              @click="showmobileMenu = !showmobileMenu" v-show="!showmobileMenu"
            >
              <svg aria-hidden="true" class="h-3.5 w-3.5 overflow-visible stroke-slate-700" fill="none" stroke-width="2" stroke-linecap="round">
                <path d="M0 1H14M0 7H14M0 13H14" class="origin-center transition"></path>
                <path d="M2 2L12 12M12 2L2 12" class="origin-center transition scale-90 opacity-0"></path>
              </svg>
            </button>
            <div v-show="showmobileMenu">
              <button
                class="relative z-10 flex h-8 w-8 items-center justify-center"
                aria-label="Toggle Navigation" id="headlessui-popover-button-:R1p6:"
                type="button"
                aria-expanded="true" aria-controls="headlessui-popover-panel-:R1p6H1:"
                @click="showmobileMenu = false"
              >
                <svg aria-hidden="true" class="h-3.5 w-3.5 overflow-visible stroke-slate-700" fill="none" stroke-width="2" stroke-linecap="round">
                  <path d="M0 1H14M0 7H14M0 13H14" class="origin-center transition scale-90 opacity-0"></path>
                  <path d="M2 2L12 12M12 2L2 12" class="origin-center transition"></path>
                </svg>
              </button>
              <div class="menu-active absolute inset-x-0 top-full bg-white p-4 rounded-b-lg shadow-xl font-medium">

                <!-- About -->
                <a-dropdown @click="getTabNumber('/')" class="mb-2">
                  <nuxt-link  aria-label="Home" to="/" class="ant-dropdown-link flex items-center justify-between" @click.prevent>
                    <span :class="(tab_number === '/' ? 'border-b-[3px] mobile_header_border px-[6px]' : 'border-none')">
                      {{ $t("header.header_about_us") }}
                    </span>
                  </nuxt-link>
                </a-dropdown>

                <a-dropdown @click="getTabNumber('/projects')" class="mb-2">
                  <nuxt-link  aria-label="projects" to="/projects" class="ant-dropdown-link flex items-center justify-between" @click.prevent>
                    <span :class="(tab_number === '/projects' ? 'border-b-[3px] mobile_header_border px-[6px]' : 'border-none')">
                      {{$t("header.projects") }}
                    </span>
                  </nuxt-link>
                </a-dropdown>

                <a-dropdown @click="getTabNumber('/activity')"  class="mb-2">
                  <nuxt-link  aria-label="services" to="/activity" class="ant-dropdown-link flex items-center justify-between" @click.prevent>
                    <span :class="(tab_number === '/activity' ? 'border-b-[3px] mobile_header_border px-[6px]' : 'border-none')">
                      {{ $t("header.activity") }}
                    </span>
                  </nuxt-link>
                </a-dropdown>

                <a-dropdown @click="getTabNumber('/contact')" >
                  <nuxt-link  aria-label="contact" to="/contact" class="ant-dropdown-link flex items-center justify-between" @click.prevent>
                    <span :class="(tab_number === '/contact' ? 'border-b-[3px] mobile_header_border px-[6px]' : 'border-none')">
                      {{ $t("header.contact") }}
                    </span>
                  </nuxt-link>
                </a-dropdown>

                <!-- Login Language -->
                <div class="flex items-center space-x-4 flex flex-row-reverse ">
                  <div class="cursor-pointer mr-[15px]">
                    <div class="w-6 h-6" @click="changeAppLocale('mn')" v-if="getCurrentLanguage !== 'mn'">
                      <img class="w-6 h-6" src="/images/mn_logo.png"/>
                    </div>
                    <div class="w-6 h-6" @click="changeAppLocale('en')" v-if="getCurrentLanguage !== 'en'">
                      <img class="w-6 h-6" src="/images/eng_logo.png"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'


import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

export default {
  components: {

  },
  data () {
    return {
      showmobileMenu: false,
      mobileMenu: false,
      scrollPosition: null,
      open: true,
      active: true,
      tab_number: ''
    }
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
  methods: {
    getTabNumber(get_val){
      this.tab_number = get_val;
      this.showmobileMenu = false
    },
    changeAppLocale(locale) {
      this.$store.commit('setLanguage', locale);
      this.$i18n.locale = this.$store.state.language;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
  },
  created() {
    localStorage.getItem('lang') != null ? this.$i18n.locale = localStorage.getItem('lang') : this.$i18n.locale = 'mn';
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    this.tab_number = window.location.pathname
    // console.log(window.location.pathname)
  },
}
</script>

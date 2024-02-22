<template>
  <Banner />
  <About />
  <Support/>
  <WebFooter/>
</template>

<script>

import About from "~/components/home/About.vue";
import Support from "~/components/home/Support.vue";
import Banner from "~/components/home/Banner.vue";
import WebFooter from '~/components/layouts/default/WebFooter.vue'

export default {
  components: {
    About,
    Support,
    Banner,
    WebFooter
  },
  data() {
    return {

    };
  },
};
</script>
<style scoped>
</style>

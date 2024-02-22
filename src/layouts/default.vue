<template>
  <div class="bg-white h-screen DefaultLayout">
    <Head>
      <Title>HDIC</Title>
    </Head>
    <WebHeader/>
    <NuxtPage :key="$route.fullPath"/>
<!--    <WebFooter/>-->
    <div id="fb-root"></div>
    <div id="fb-customer-chat" class="fb-customer-chat"></div>
  </div>
</template>
<script>
import WebHeader from '~/components/layouts/default/WebHeader.vue'
// import WebFooter from '~/components/layouts/default/WebFooter.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    WebHeader,
    // WebFooter,
  },
  computed: {
    ...mapGetters([
      'user',
      'userToken',
      'saveEventItems'
      // ...
    ]),
  },
}
</script>

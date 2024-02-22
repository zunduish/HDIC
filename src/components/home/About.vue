<template>
  <div id="vetp_style" class="container mx-auto px-4 lg:px-10 mb-24 text-center">
    <p class="text-[47px] font-bold ml-[15px] text-primary_color">{{$t("header.hdic_copyright")  }}</p>
    <p class="text-justify text-primary_color font-light text-[18px] mt-[15px] leading-7">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi nulla. Nam maximus leo vitae orci porta condimentum eget eget tortor. Nullam semper arcu quis ligula fermentum, sit amet vestibulum nunc consequat. Integer sit amet lobortis turpis, in euismod orci. Curabitur nisi massa, accumsan euismod risus ac, posuere tristique ipsum. Fusce sagittis est id mauris condimentum, vel vehicula velit rhoncus. Suspendisse est velit, cursus ut tempor ut, posuere vitae lorem. Morbi vitae odio vehicula, cursus erat at, tristique libero.

      Donec hendrerit nisl eu sem auctor, in aliquam ex sodales. In vel vehicula dui, id tempor dui. Vivamus eget neque at dui tincidunt iaculis vel ut velit. Mauris purus tellus, interdum sed varius ac, sollicitudin vel dui. Ut in purus quam. Sed tortor est, elementum sed est porttitor, ornare euismod orci. Fusce diam lectus, sollicitudin non maximus ut, fermentum ut odio. Maecenas lacus neque, finibus eu porttitor et, consectetur scelerisque diam. Aliquam facilisis lobortis tellus ut tincidunt. Sed dictum augue quis ex varius, quis tristique nunc rutrum. Sed malesuada est eget odio feugiat, sit amet pretium arcu consectetur. Phasellus molestie ex at felis consectetur fringilla. Donec sem velit, sodales at varius nec, hendrerit ut eros.

      Maecenas blandit elit vel tempor lobortis. Quisque sollicitudin massa sit amet aliquet eleifend. In non convallis tortor. Aenean placerat ex lacus, quis suscipit lectus aliquet a. Morbi elementum sem a tellus interdum, in scelerisque velit varius. Donec non est sed augue luctus tempor. Aenean eget aliquam ante. Sed accumsan eu sapien at faucibus. Nullam mollis ut risus in feugiat. Nam vehicula maximus tincidunt. Donec nec orci quis ipsum rhoncus tempor ac sit amet ipsum. Ut quam orci, tempus nec mi vitae, vulputate consequat purus.

      Donec dui est, sollicitudin ut volutpat eget, cursus quis dui. Proin vel sagittis mauris, ut sodales metus. Etiam lacus nisi, rutrum vitae nisl maximus, rhoncus feugiat magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse dapibus eu sem in consectetur. Integer quis lacus auctor, interdum lorem et, viverra nisi. Maecenas gravida sem metus, vitae mattis quam mollis sit amet. Ut vehicula maximus interdum. Nullam pretium urna id risus fermentum, et cursus nulla sollicitudin. Nam mollis dictum congue. Mauris varius tellus non tortor egestas, et suscipit magna pretium.

      Praesent a eros consectetur, tempor dui quis, accumsan justo. Donec nec tempor ex. Nulla id risus ac elit porta facilisis vel nec nisi. Duis bibendum odio sollicitudin massa efficitur, ac suscipit mauris luctus. Ut nec justo interdum, suscipit mi sed, fringilla risus. Praesent fermentum tortor augue, ac gravida nisl tempus sit amet. Nunc imperdiet metus et eros blandit, ut efficitur ante porttitor. Nunc condimentum felis eu ligula ornare, nec ullamcorper tortor eleifend. Vestibulum faucibus velit vel velit euismod, sit amet efficitur libero imperdiet. Nulla porta justo vel eros commodo eleifend. Nullam ultrices turpis justo. Praesent ut urna ut quam pharetra vehicula at egestas lectus.
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "About",
  data() {
    return {
      activeKey: '2',

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
}
</script>

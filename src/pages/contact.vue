<template>
  <div class="container mx-auto px-4 ">
    <div class="w-full mt-[80px]">
      <div class="w-full  pl-[10px] text-primary_color text-[22px]">
        <div class="">
          <div class="flex">
            <div class="w-[70px] lg:w-[95px] inline-flex">
              <font-awesome-icon icon="map-location-dot" class="text-[45px] mx-auto mt-5" />
            </div>
            <div class="">
              <p class="font-bold">{{$t("footer.address")}}: </p>
              <p class="leading-6 font-light  mt-[5px] " >{{$t("footer.address_text")}}</p>
            </div>
          </div>
        </div>

        <div class="mt-[60px]">
          <div class="flex">
            <div class="w-[70px] lg:w-[95px] inline-flex">
              <font-awesome-icon icon="phone" class="text-[45px] mx-auto mt-5" />
            </div>
            <div class="">
              <p class="font-bold">{{$t("footer.phone")}}: </p>
              <p class="leading-6 font-light mt-[5px]">99205000, 91117874, 99078498</p>
            </div>
          </div>

          <div class="flex mt-[60px]">
            <div class="w-[70px] lg:w-[95px] inline-flex">
              <font-awesome-icon icon="envelope" class="text-[45px] mx-auto mt-5" />
            </div>
            <div class="">
              <p class="font-bold  font-bold">{{$t("footer.email")}}: </p>
              <p class="leading-6  font-light mt-[5px]">info@hdic.mn</p>
              <p class="leading-6  font-light ">hdic.mongolia@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

<!--      <div class="mt-[100px] map_cont">-->
<!--        <div class="w-full h-[450px] mb-5" >-->
<!--          <l-map style=" border-radius:8px; border:1px solid #d8dde4" :zoom="zoom" :center="center" :draggable="false">-->
<!--            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>-->
<!--            <l-marker :lat-lng="markerLatLng">-->
<!--              <l-icon icon-url="/icons/map-marker.png" :iconSize="[32, 32]" :iconAnchor="[16, 16]" ></l-icon>-->
<!--            </l-marker>-->
<!--          </l-map>-->
<!--        </div>-->
<!--      </div>-->

      <div class="mt-[100px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1794.948755199434!2d106.94564503516432!3d47.90510439028029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2smn!4v1706615329462!5m2!1sen!2smn"
                class="rounded-xl"
                width="100%"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" />
      </div>
      <div class="w-full h-[100px]">

      </div>
      <!--        fb logos-->
    </div>
  </div>
  <div class="w-full bg-primary_color">
    <div class="container mx-auto px-4 ">
      <div class=" md:flex items-center justify-between py-4 pb-4">
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
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon, LTooltip } from '@vue-leaflet/vue-leaflet';
import "leaflet/dist/leaflet.css";

export default {
  name: "contact.vue",
  data() {
    return {
      url: 'https://cloudgis.mn/map/tile/tile.php?zoom={z}&x={x}&y={y}&mskey=T-002-0002-B01',
      attribution: '<a target="_blank" href="https://imap.mn">iMap</a>',
      zoom: 17,
      center: [47.904544, 106.946132],
      markerLatLng: [47.904544, 106.946132],
      title: "Contact xuudas"
    };
  },
  components: {
    'l-map': LMap,
    'l-tile-layer': LTileLayer,
    'l-marker': LMarker,
    'l-icon': LIcon,
    'l-tooltip': LTooltip
  },
}
</script>

<style scoped>

</style>

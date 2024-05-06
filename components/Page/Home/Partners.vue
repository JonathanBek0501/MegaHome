<template>
  <div class="max-w-7xl mx-auto py-10">
    <swiper
      :spaceBetween="24"
      :slidesPerView="3"
      :breakpoints="{
        '640': {
          slidesPerView: 4,
          spaceBetween: 28,
        },
        '768': {
          slidesPerView: 6,
          spaceBetween: 32,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :allowTouchMove="false"
      :modules="modules"
      class="swiperPartnerBrands"
    >
      <swiper-slide v-for="(logo, index) in logos" :key="index">
        <img :src="`/logos/${logo}`" :alt="logo" class="max-h-12 mx-auto" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const modules = [Autoplay];

const logos = ref(['elde.svg', 'imkon.svg', 'ishonch.svg', 'tehnodom.jpg', 'uzum.svg', 'elde.svg', 'imkon.svg', 'ishonch.svg', 'tehnodom.jpg', 'uzum.svg'])
</script>

<style>
.swiper-wrapper {
  @apply !items-center
}
</style>
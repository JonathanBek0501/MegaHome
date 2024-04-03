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
          slidesPerView: 8,
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
      <swiper-slide v-for="items in 16">
        <img src="/Pearl_logo.jpg" alt="pearl logo" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const modules = [Autoplay];
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      @autoplayTimeLeft="onAutoplayTimeLeft"
      class="mySwiper sm:custom-h-desc custom-h-mob"
    >
      <swiper-slide>
        <div class="relative w-full h-full">
          <img src="/ramadan-banner.webp" alt="" class="w-full h-full object-cover">

          <div class="absolute inset-0 bg-black/40 w-full h-full"></div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full h-full">
          <img src="/banner1.jpg" alt="" class="w-full h-full object-cover">

          <div class="absolute inset-0 bg-black/40 w-full h-full"></div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="relative w-full h-full">
          <img src="/banner2.jpg" alt="" class="w-full h-full object-cover">

          <div class="absolute inset-0 bg-black/40 w-full h-full"></div>
        </div>
      </swiper-slide>
      <template #container-end>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48" ref="progressCircle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </swiper>
  </div>
</template>

<script>
  import { ref } from 'vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const progressCircle = ref(null);
      const progressContent = ref(null);
      const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.value.style.setProperty('--progress', 1 - progress);
        progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
      };
      return {
        onAutoplayTimeLeft,
        progressCircle,
        progressContent,
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

<style>
.custom-h-desc {
  height: calc(100vh - 156.14px)
}
.custom-h-mob {
  height: calc(100vh - 165px)
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #C21A1A;
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: #C21A1A;
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}

.swiper-button-prev,
.swiper-button-next {
  color: #C21A1A;
}
</style>
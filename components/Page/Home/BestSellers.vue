<template>
    <div class="max-w-7xl mx-auto py-10 px-4 sm:px-6">
        <h2 class="text-3xl sm:text-4xl font-bold pb-5">
            Best Sellers
        </h2>
        <div class="relative">
            <swiper
                :slides-per-view="2"
                :space-between="10"
                :navigation="{prevEl:'.swiper-button-pre', nextEl:'.swiper-button-nex'}"
                :autoplay="{
                    delay: 6000,
                    disableOnInteraction: true,
                    stopOnLastSlide: true
                }"
                :breakpoints="{
                    '640': {
                    slidesPerView: 2,
                    spaceBetween: 16,
                    },
                    '768': {
                    slidesPerView: 3,
                    spaceBetween: 24,
                    },
                    '1024': {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    },
                }"
                :modules="modules"
                class="swiperBestSellers !static"
            >
                <swiper-slide v-for="items in 8">
                    <Card />
                </swiper-slide>
                
                <button type="button" class="disabled:opacity-70 swiper-button-pre sm:absolute top-1/2 sm:-translate-y-1/2 -left-5 bg-white rounded-full border border-brand text-brand rotate-90 z-50 p-1.5 shadow-md mt-5">
                    <IconChevron />
                </button>
                <button type="button" class="disabled:opacity-70 swiper-button-nex sm:absolute top-1/2 sm:-translate-y-1/2 -right-5 bg-white rounded-full border border-brand text-brand -rotate-90 z-50 p-1.5 shadow-md mt-5 ml-3">
                    <IconChevron />
                </button>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { Navigation, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const modules = [Navigation, Autoplay]
</script>

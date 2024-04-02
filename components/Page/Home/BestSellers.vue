<template>
    <div class="max-w-7xl mx-auto py-10">
        <h2 class="text-4xl font-bold pb-5">
            Best Sellers
        </h2>
        <div class="relative">
            <swiper
            :slides-per-view="1"
            :space-between="16"
            :navigation="{prevEl:'.swiper-button-pre', nextEl:'.swiper-button-nex'}"
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
    
                <button type="button" class="disabled:opacity-70 swiper-button-pre absolute top-1/2 -translate-y-1/2 -left-5 bg-white rounded-full border border-brand text-brand rotate-90 z-50 p-1.5 shadow-md">
                    <IconChevron />
                </button>
                <button type="button" class="disabled:opacity-70 swiper-button-nex absolute top-1/2 -translate-y-1/2 -right-5 bg-white rounded-full border border-brand text-brand -rotate-90 z-50 p-1.5 shadow-md">
                    <IconChevron />
                </button>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const modules = [Navigation]
</script>
<template>
    <div class="max-w-7xl mx-auto py-10 px-4 sm:px-6">
        <h2 class="text-3xl sm:text-4xl font-bold pb-5">
            New Products
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
            class="swiperNewProducts !static"
            >
                <swiper-slide v-for="(card, index) in cards" :key="index">
                    <Card :img="card.img" :title="card.title" :current-price="card.currentPrice" :pre-price="card.prePrice"/>
                </swiper-slide>
    
                <button type="button" class="disabled:opacity-40 swiper-button-pre sm:absolute top-1/2 sm:-translate-y-1/2 -left-5 bg-white rounded-full border border-brand text-brand rotate-90 z-50 p-1.5 shadow-md mt-5">
                    <IconChevron />
                </button>
                <button type="button" class="disabled:opacity-40 swiper-button-nex sm:absolute top-1/2 sm:-translate-y-1/2 -right-5 bg-white rounded-full border border-brand text-brand -rotate-90 z-50 p-1.5 shadow-md mt-5 ml-3">
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

const cards = ref([
    {
        img: 'bestSellers/08DLX.jpg',
        title: '3L Grafin va 150ML Fyujer',
        currentPrice: 350000,
        prePrice: 450000,
    },
    {
        img: 'bestSellers/58278M.jpg',
        title: '40x28 Dekorativ temir lagan',
        currentPrice: 815000,
        prePrice: 875000,
    },
    {
        img: 'bestSellers/9PCGranite2.jpg',
        title: '9PC Granit',
        currentPrice: 1250000,
        prePrice: 1350000,
    },
    {
        img: 'bestSellers/CHEMODAN.jpg',
        title: 'Hoffmayer 72PC',
        currentPrice: 400000,
        prePrice: 550000,
    },
    {
        img: 'bestSellers/DOMTIME205F.jpg',
        title: 'Kreslo 205',
        currentPrice: 1650000,
        prePrice: 1800000,
    },
    {
        img: 'bestSellers/qozon1.JPG',
        title: 'Granit qozon',
        currentPrice: 490000,
        prePrice: 650000,
    },
    {
        img: 'bestSellers/Termos096JP.jpg',
        title: 'Termos 096JP',
        currentPrice: 400000,
        prePrice: 550000,
    },
    {
        img: 'bestSellers/DOMTIME363F.jpg',
        title: 'Kreslo 363F',
        currentPrice: 1450000,
        prePrice: 1550000,
    },
])
</script>
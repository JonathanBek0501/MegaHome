<template>
    <header>
        <div class="max-w-7xl mx-auto flex items-center justify-between gap-5">
            <a href="/" class="flex justify-center p-4">
                <img class="w-40 sm:w-56" src="/megahome-text.png" alt="">
            </a>

            <div class="max-w-md w-full mt-2">
                <input type="search" placeholder="Mahsulot izlash" class="border border-gray-400 rounded-md w-full h-12 px-4">
            </div>
        </div>

        <div class="bg-brand">
            <div class="max-w-7xl mx-auto flex items-center justify-between px-4">
                <nuxt-link v-for="(navigation, index) in navigations" :key="index" :to="navigation.link" class="flex items-center justify-center gap-1 uppercase text-white transition-all ease-in-out hover:text-white/70 border-b border-transparent hover:border-b hover:border-white font-medium text-sm p-3">
                    <span>
                        {{ navigation.title }}
                    </span>
                </nuxt-link>
            </div>
        </div>
    </header>
</template>

<script setup>
const navigations = ref([
    {
        title: 'Oshxona toplamlari',
        link: "/products",
    },
    {
        title: "Maishiy texnikalar",
        link: "/products",
    },
    {
        title: 'Chamadonlar',
        link: "/products",
    },
    {
        title: 'Seyflar',
        link: "/products",
    },
    {
        title: 'Office kreslolar',
        link: "/products",
    },
    {
        title: 'Dekorlar',
        link: "/products",
    },
])
// const navigations = ref([
//     {
//         title: "oshxona to'plam",
//         subtitles: ref([
//             {
//                 title: 'Qozonlar',
//                 link: ''
//             },
//             {
//                 title: 'Oshxona Anjomlari',
//                 link: ''
//             },
//             {
//                 title: 'Dasturxonlar',
//                 link: ''
//             },
//         ])
//     },
//     {
//         title: 'Servis Idishlar',
//         subtitles: ref([
//             {
//                 title: "Idish to'plam",
//                 link: ''
//             },
//             {
//                 title: "Choynak to'plam",
//                 link: ''
//             },
//             {
//                 title: "Chashkalar",
//                 link: ''
//             },
//         ])
//     },
//     {
//         title: 'Dekorlar',
//         subtitles: ref([
//             {
//                 title: 'Soatlar',
//                 link: ''
//             },
//             {
//                 title: 'Dekorlar',
//                 link: ''
//             },
//             {
//                 title: 'Pano kartinalar',
//                 link: ''
//             },
//             {
//                 title: 'Islomiy kartinalar',
//                 link: ''
//             },
//         ])
//     },
//     {
//         title: 'Maishiy Texnika',
//         subtitles: ref([
//             {
//                 title: 'Tefal',
//                 link: ''
//             },
//             {
//                 title: 'Blender',
//                 link: ''
//             },
//             {
//                 title: 'Dazmol',
//                 link: ''
//             },
//             {
//                 title: 'Mikrovolnovka',
//                 link: ''
//             },
//             {
//                 title: 'Isitgich',
//                 link: ''
//             },
//             {
//                 title: 'Kolonka',
//                 link: ''
//             },
//         ])
//     },
//     {
//         title: 'Kreslolar',
//         subtitles: ref([
//             {
//                 title: 'Stullar',
//                 link: ''
//             },
//             {
//                 title: "Yumshoq",
//                 link: ''
//             },
//             {
//                 title: 'Setochniy',
//                 link: ''
//             },
//         ])
//     },
//     {
//         title: 'Chamadonlar',
//         subtitles: ref([
//             {
//                 title: 'Kichik',
//                 link: ''
//             },
//             {
//                 title: "O'rta",
//                 link: ''
//             },
//             {
//                 title: 'Katta',
//                 link: ''
//             },
//         ])
//     },
// ])
</script>
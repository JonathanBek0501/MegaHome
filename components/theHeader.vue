<template>
    <header>
        <div class="flex justify-center p-4">
            <img class="w-52 sm:w-80" src="/megahome-text.png" alt="">
        </div>

        <div class="bg-brand hidden">
            <div class="grid grid-cols-6 max-w-7xl mx-auto px-4">
                <div v-for="(navigation, index) in navigations" :key="index" class="relative w-full whitespace-nowrap group">
                    <nuxt-link to="/" class="flex items-center justify-center gap-1 uppercase text-white hover:text-white/70 font-medium text-sm p-3">
                        <span>
                            {{ navigation.title }}
                        </span>
                        <IconChevron class="group-hover:rotate-180 transition ease-in-out" />
                    </nuxt-link>

                    <div class="absolute top-13 bg-black w-full hidden group-hover:block z-10">
                        <nuxt-link v-for="(subNav, index) in navigation.subtitles" :key="index" to="/" class="block text-center text-white hover:bg-brand p-3">
                            {{ subNav.title }}
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
const navigations = ref([
    {
        title: "oshxona to'plam",
        subtitles: ref([
            {
                title: 'Qozonlar',
                link: ''
            },
            {
                title: 'Oshxona Anjomlari',
                link: ''
            },
            {
                title: 'Dasturxonlar',
                link: ''
            },
        ])
    },
    {
        title: 'Servis Idishlar',
        subtitles: ref([
            {
                title: "Idish to'plam",
                link: ''
            },
            {
                title: "Choynak to'plam",
                link: ''
            },
            {
                title: "Chashkalar",
                link: ''
            },
        ])
    },
    {
        title: 'Dekorlar',
        subtitles: ref([
            {
                title: 'Soatlar',
                link: ''
            },
            {
                title: 'Dekorlar',
                link: ''
            },
            {
                title: 'Pano kartinalar',
                link: ''
            },
            {
                title: 'Islomiy kartinalar',
                link: ''
            },
        ])
    },
    {
        title: 'Maishiy Texnika',
        subtitles: ref([
            {
                title: 'Tefal',
                link: ''
            },
            {
                title: 'Blender',
                link: ''
            },
            {
                title: 'Dazmol',
                link: ''
            },
            {
                title: 'Mikrovolnovka',
                link: ''
            },
            {
                title: 'Isitgich',
                link: ''
            },
            {
                title: 'Kolonka',
                link: ''
            },
        ])
    },
    {
        title: 'Kreslolar',
        subtitles: ref([
            {
                title: 'Stullar',
                link: ''
            },
            {
                title: "Yumshoq",
                link: ''
            },
            {
                title: 'Setochniy',
                link: ''
            },
        ])
    },
    {
        title: 'Chamadonlar',
        subtitles: ref([
            {
                title: 'Kichik',
                link: ''
            },
            {
                title: "O'rta",
                link: ''
            },
            {
                title: 'Katta',
                link: ''
            },
        ])
    },
])
</script>
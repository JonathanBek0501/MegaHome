<template>
    <div class="max-w-7xl mx-auto pt-4 px-4 sm:px-6">
        <TheBreadcrumbs />

        <div class="py-10">
            <h2 class="text-3xl sm:text-4xl font-bold pb-5">
                Category name
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 lg:gap-5">
                <Card v-for="(card, index) in cards" :key="index" :img="card.img" :title="card.title" :current-price="card.currentPrice" :pre-price="card.prePrice" class="h-full"/>
            </div>
        </div>

        <div class="flex justify-center">
            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span class="sr-only">Previous</span>
                    <IconChevron class="h-5 w-5 rotate-90" aria-hidden="true" />
                </a>
                <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span class="sr-only">Next</span>
                    <IconChevron class="h-5 w-5 -rotate-90" aria-hidden="true" />
                </a>
            </nav>
        </div>
    </div>
</template>

<script setup>
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
<template>
    <div class="rounded border overflow-hidden shadow-sm">
        <div class="w-full h-44 sm:h-72">
            <img :src="`/${img}`" :alt="title" class="w-full h-full object-cover">
        </div>
        <div class="space-y-2 p-3 sm:p-4">
            <h3 class="sm:text-xl font-semibold">
                {{ title }}
            </h3>

            <div class="flex items-center gap-2 text-sm sm:text-base">
                <span class="font-medium text-brand animate-pulse">
                    {{ formattedCurrentPrice }}
                </span>
                <span class="text-gray-400 line-through">
                    {{ formattedPrePrice }}
                </span>
            </div>

            <a href="https://t.me/ibnhayot" class="block text-center w-full rounded bg-brand text-white p-2">
                Buyrutma qilish
            </a>
        </div>
    </div>
</template>

<script setup>
const formattedCurrentPrice = computed(() => {
    if (typeof currentPrice === 'number') {
        return currentPrice.toLocaleString('en-US');
    }
    return '';
});

const formattedPrePrice = computed(() => {
    if (typeof prePrice === 'number') {
        return prePrice.toLocaleString('en-US');
    }
    return '';
});

const { img, title, currentPrice, prePrice } = defineProps({
    img: String,
    title: String,
    currentPrice: Number,
    prePrice: Number,
});
</script>
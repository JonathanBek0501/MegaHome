<template>
  <header>
    <div class="w-full bg-white">
      <div
        class="max-w-7xl mx-auto flex items-center justify-between gap-5 py-1 md:py-0 xl:px-0 px-4"
      >
        <a href="/" class="flex justify-center p-4">
          <img class="w-40 sm:w-48" src="/megahome-text.png" alt="" />
        </a>

        <div class="max-w-md w-full mt-2">
          <input
            type="search"
            placeholder="Mahsulot izlash"
            class="border border-gray-400 rounded-md w-full h-10 md:h-12 px-4"
          />
        </div>
      </div>

      <div class="relative bg-brand">
        <div class="max-w-7xl mx-auto px-4">
          <div class="md:hidden flex items-center justify-between py-2">
            <span class="text-white"> MENU </span>

            <button
              type="button"
              class="text-white"
              @click="menuOpen = !menuOpen"
            >
              <svg
                v-if="!menuOpen"
                data-slot="icon"
                class="size-8 transition-all ease-in-out"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>

              <svg
                v-else
                data-slot="icon"
                class="size-8"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div :class="menuOpen ? 'max-h-64' : 'max-h-0'" class="absolute md:static top-12 left-0 w-full bg-brand md:max-h-none overflow-hidden transition-all ease-in-out duration-200">
              <div class="flex flex-col md:flex-row md:items-center justify-between">
                <nuxt-link
                  v-for="(navigation, index) in navigations"
                  :key="index"
                  :to="navigation.link"
                  class="flex items-center justify-center gap-1 uppercase text-white transition-all ease-in-out hover:text-white/70 border-b border-transparent hover:border-b hover:border-white font-medium text-xs lg:text-sm p-3"
                >
                  <span>
                    {{ navigation.title }}
                  </span>
                </nuxt-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const navigations = ref([
  {
    title: "Oshxona toplamlari",
    link: "/products",
  },
  {
    title: "Maishiy texnikalar",
    link: "/products",
  },
  {
    title: "Chamadonlar",
    link: "/products",
  },
  {
    title: "Seyflar",
    link: "/products",
  },
  {
    title: "Office kreslolar",
    link: "/products",
  },
  {
    title: "Dekorlar",
    link: "/products",
  },
]);

const menuOpen = ref(false);
</script>

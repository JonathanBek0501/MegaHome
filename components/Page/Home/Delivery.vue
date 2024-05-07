<template>
    <section class="pt-10 overflow-hidden">
        <div class="relative overflow-hidden bg-brand text-white py-2 sm:py-4">
            <div class="running-text">
              <span class="marquee-text text-xl sm:text-2xl">
                  O'zbekiston bo'ylab yetkazib berish bepul!!! O'zbekiston bo'ylab yetkazib berish bepul!!! O'zbekiston bo'ylab yetkazib berish bepul!!!
              </span>
            </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" class="max-w-4xl mx-auto -mb-10">
            <img src="/labo-delivery.png" alt="Delivery Image" class="w-full" />
        </div>
    </section>
</template>

<style scoped>
  .running-text {
    display: flex;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
  }
  
  .marquee-text {
    display: inline-block;
    animation: marquee 10s linear infinite;
    padding-left: 100%;
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
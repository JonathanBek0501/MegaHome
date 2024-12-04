<template>
    <theHeader class="sticky top-0 left-0 z-[9999]" />
    <main class="bg-body min-h-screen">
        <slot />
        <PageHomeNewProducts />
        <PageHomePartners />
        <PageHomeDelivery />
        <PageHomeContact />

        <Basket class="fixed bottom-5 md:bottom-10 2xl:bottom-20 right-5 md:right-10 2xl:right-16 z-50"/>
    </main>
    <theFooter />
</template>
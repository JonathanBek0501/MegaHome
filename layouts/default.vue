<template>
    <theHeader />
    <main class="bg-body min-h-screen">
        <slot />
        <PageHomeNewProducts />
        <PageHomePartners />
        <PageHomeDelivery />
        <PageHomeContact />

        <Basket class="fixed bottom-20 right-16 z-50"/>
    </main>
    <theFooter />
</template>
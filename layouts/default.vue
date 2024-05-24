<template>
    <theHeader />
    <main class="bg-body min-h-screen">
        <slot />
        <PageHomeNewProducts />
        <PageHomePartners />
        <PageHomeDelivery />
        <PageHomeContact />
    </main>
    <theFooter />
</template>
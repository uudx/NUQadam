<script setup>
import Header from '../Header.vue'
import Footer from '../Footer.vue'
</script>

<template>
    <header>
        <Header/>
    </header>
    <main>
        <slot/>
    </main>
    <footer>
        <Footer/>
    </footer>
</template>

<style scoped>
</style>
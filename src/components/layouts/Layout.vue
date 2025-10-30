<script setup>
import Header from '../Header.vue'
import HomePage from '../pages/Welcome.vue'
</script>

<template>
    <header>
        <Header/>
    </header>
    <main>
        <slot/>
    </main>
</template>

<style scoped>
</style>
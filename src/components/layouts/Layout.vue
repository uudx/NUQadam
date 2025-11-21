<script setup>
import Header from '../Header.vue'
</script>

<template>
    <header class="sticky-header">
        <Header/>
    </header>
    <slot/>
</template>

<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 50;
}
</style>
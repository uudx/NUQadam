<template>
  <main class="bg-white dark:bg-black">
    <Hero/>
    <Motivation/>
    <Instructors/>
    <Features/>
    <Products/>
    <Prices/>
    <CallToAction/>
    <FAQ/>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import Hero from '@/components/Hero.vue';
import Motivation from '@/components/Motivation.vue';
import Instructors from '@/components/Instructors.vue';
import Features from '@/components/Features.vue';
import Products from '@/components/Products.vue';
import Prices from '@/components/Prices.vue';
import CallToAction from '@/components/CallToAction.vue';
import FAQ from '@/components/FAQ.vue';
</script>
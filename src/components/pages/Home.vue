<template>
  <main class="bg-white dark:bg-black">
    <Hero/>
    <Motivation/>
    <Instructors/>
    <Features/>
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
import CallToAction from '@/components/CallToAction.vue';
import FAQ from '@/components/FAQ.vue';
</script>
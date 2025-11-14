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
import Hero from '../Hero.vue';
import Motivation from '../Motivation.vue';
import Instructors from '../Instructors.vue';
import Features from '../Features.vue';
import CallToAction from '../CallToAction.vue';
import FAQ from '../FAQ.vue';
</script>
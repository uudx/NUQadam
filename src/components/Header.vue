<script setup>
import ContactPopover from './ContactPopover.vue'
</script>

<template>
  <header class="bg-white dark:bg-gray-900">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
      
      <div class="flex lg:flex-1 items-center justify-between">
        <a href="#" class="-m-1 p-1 flex items-center gap-x-2">
          <span class="sr-only">NUQadam</span>
          
          <img class="h-6 w-auto dark:hidden" src="/vite.svg" alt="NUQadam Logo">
          
          <img class="h-6 w-auto hidden dark:block" src="/vite.svg" alt="NUQadam Logo">

          <span class="font-semibold text-black dark:text-white">
            NUQadam
          </span>
        </a>
      </div>

      <div>
        <ContactPopover/>
      </div>

    </nav>
  </header>
</template>

<style scoped>
</style>
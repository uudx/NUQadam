<script setup>
import { computed } from 'vue';
import { socialButtons } from '../data/socials.js'

const whatsappHref = computed(() => {
  const whatsappButton = socialButtons.find(item => item.name === 'WhatsApp');
  return whatsappButton ? whatsappButton.href : '#';
});

const navigateToWhatsApp = () => {
  if (whatsappHref.value && whatsappHref.value !== '#') {
    window.open(whatsappHref.value, '_blank');
  }
}

</script>

<template>
  <section class="bg-blue-700 dark:bg-blue-800 py-20 px-6 lg:px-8 text-white text-center relative overflow-hidden">
    <div class="absolute inset-0 opacity-20">
      
<div class="bg-linear-to-br from-blue-600 to-indigo-800 w-full h-full"></div>
    </div>
    <div class="container mx-auto relative z-10">
      <h2 class="text-4xl lg:text-5xl font-extrabold mb-6">Ағылшынды бүгіннен меңгер!</h2>
      <p class="text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
        Біздің онлайн курстар арқылы тілдік дағдыларыңды дамытып, табысты оқушылар қатарына қосыл.
      </p>
      <button 
        @click="navigateToWhatsApp"
        class="bg-white text-blue-700 dark:text-blue-800 font-bold py-4 px-10 rounded-full text-xl hover:bg-gray-200 dark:hover:bg-gray-300 transition duration-300 shadow-lg transform hover:scale-105"
      >
        Жазылу
      </button>
    </div>
  </section>
</template>
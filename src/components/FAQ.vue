<script setup>
import { ref } from 'vue';

const openFAQ = ref(null); // Holds the ID of the open question

const faqList = ref([
  { id: 1, question: 'Бұл онлайн курс қалай жұмыс істейді?', answer: 'Курс видео дәрістер, жаттығулар және тесттер арқылы ұйымдастырылған. Сіз өз темпіңізде оқып, білімді біртіндеп меңгере аласыз.' },
  { id: 2, question: 'Қандай материалдар кіреді?', answer: 'Курсқа видео сабақтар, оқу материалдары, интерактивті жаттығулар және қосымша PDF-кітапшалар кіреді.' },
  { id: 3, question: 'Маған ағылшын тілін алдын ала білу керек пе?', answer: 'Жоқ, курс барлық деңгейдегі оқушыларға арналған - бастаушыдан бастап ілгерілеушілерге дейін.' },
]);

const toggleFAQ = (id) => {
  if (openFAQ.value === id) {
    openFAQ.value = null; // Close it
  } else {
    openFAQ.value = id; // Open it
  }
};

// --- Accordion Transition Methods ---
const onAccordionEnter = (el) => {
  el.style.height = 'auto';
  const height = getComputedStyle(el).height;
  el.style.height = '0';
  getComputedStyle(el);
  setTimeout(() => {
    el.style.height = height;
  });
};

const onAccordionLeave = (el) => {
  el.style.height = getComputedStyle(el).height;
  getComputedStyle(el);
  setTimeout(() => {
    el.style.height = '0';
  });
};
</script>

<template>
  <section class="container mx-auto py-16 px-6 lg:px-8 bg-white dark:bg-black">
    <h2 class="text-4xl font-extrabold text-center text-[#b12c00] dark:text-red-400 mb-12">Жиі қойылатын сұрақтар</h2>
    <div class="max-w-3xl mx-auto">
      <div 
        v-for="faq in faqList" 
        :key="faq.id" 
        class="border-b border-gray-200 dark:border-gray-700"
      >
        <button @click="toggleFAQ(faq.id)" class="flex justify-between items-center w-full py-6 text-left">
          <span class="text-xl font-bold text-gray-900 dark:text-white">{{ faq.question }}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6 shrink-0 text-[#b12c00] dark:text-red-400 transition-transform duration-300"
            :class="{'rotate-45': openFAQ === faq.id}"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <transition name="accordion" @enter="onAccordionEnter" @leave="onAccordionLeave">
          <div v-if="openFAQ === faq.id" class="overflow-hidden">
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed pb-6 pr-8">
              {{ faq.answer }}
            </p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Vue Transition classes for the accordion.
*/
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
}
</style>
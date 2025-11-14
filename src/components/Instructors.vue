<script setup>
import { ref, computed} from 'vue';

const cards = ref([
  {
    id: 1,
    image: '/resources/webp/pfp/1.webp',
    name: 'Әбжан Бауыржан',
    title: 'Мұғалім'
  },
  {
    id: 2,
    image: '/resources/webp/pfp/2.webp',
    name: 'Серікулы Рамазан',
    title: 'Мұғалім'
  },
  {
    id: 3,
    image: '/resources/webp/pfp/3.webp',
    name: 'Тушжанов Мади',
    title: 'Мұғалім'
  },
  {
    id: 4,
    image: '/resources/webp/pfp/4.webp',
    name: 'Ибрагим Даурен',
    title: 'Қалаушы'
  },
  {
    id: 5,
    image: '/resources/webp/pfp/5.webp',
    name: 'Абикенова Нурлы',
    title: 'Мұғалім'
  },
  {
    id: 6,
    image: '/resources/webp/pfp/6.webp',
    name: 'Сансызбай Байнур',
    title: 'Мұғалім'
  },
  {
    id: 7,
    image: '/resources/webp/pfp/7.webp',
    name: 'Қуаныш Кевлинжан',
    title: 'Мұғалім'
  },
  {
    id: 8,
    image: '/resources/webp/pfp/8.webp',
    name: 'Ерзатулы Әділжан',
    title: 'Мұғалім'
  }
])

// --- Logic for STYLE 1: Carousel ---
const sliderIndex = ref(Math.floor(cards.value.length / 2));
const viewportRef = ref(null);
const viewportWidth = ref(0);
const cardWidth = 256; // w-64
const cardGap = 32; // mx-4 (1rem * 2)
const cardWidthWithGap = cardWidth + cardGap;

const sliderOffset = computed(() => {
  if (!viewportRef.value || selectedStyle.value !== 1) return 0;
  const centerPoint = viewportWidth.value / 2;
  const centerOfActiveCard = (sliderIndex.value * cardWidthWithGap) + (cardWidth / 2);
  return (centerPoint - centerOfActiveCard - (cardGap / 2));
});

const nextInstructor = () => {
  if (sliderIndex.value < cards.value.length - 1) sliderIndex.value++;
};
const prevInstructor = () => {
  if (sliderIndex.value > 0) sliderIndex.value--;
};
</script>

<template>
  <section class="py-16 px-6 lg:px-8 bg-gray-100 dark:bg-black">
    <div class="container mx-auto">
      <h2 class="text-4xl font-extrabold text-center text-blue-800 dark:text-blue-400">
        Meet Our Expert Instructors
      </h2>
      <router-link to="/teachers">
        <h4 class="text-xl font-extrabold text-center text-gray-700/40 dark:text-gray-300/40 mb-6">
          Click to see more
        </h4>
      </router-link>
      <!-- Automatically wraps and centers the cards -->
      <div class="flex flex-wrap justify-center gap-8">
        <div
          v-for="card in cards"
          :key="card.id"
          class="w-full sm:w-64 md:w-72 bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <!-- Card Content -->
          <div class="p-6 text-center">
            <!-- Image Placeholder -->
            <div class="w-24 h-24 rounded-full mx-auto flex items-center justify-center text-white opacity-90 bg-linear-to-br from-blue-400 to-indigo-600 mb-4 shadow-lg">
              <img 
                v-lazy="card.image"
                :alt="card.name"
              >
            </div>
            
            <!-- Name -->
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">{{ card.name }}</h4>
            <!-- Title -->
            <p class="text-sm text-blue-600 dark:text-blue-400 mb-4">{{ card.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Scoped styles can go here */
.flex-shrink-0 {
  flex-shrink: 0;
}
</style>
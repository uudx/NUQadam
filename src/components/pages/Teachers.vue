<script setup>
import { ref } from 'vue'

const cards = ref([
  {
    id: 1,
    image: '/public/resources/webphq/1.webp',
    title: 'Әбжан Бауыржан',
    text: 'Әбжан Бауыржан'
  },
  {
    id: 2,
    image: '/public/resources/webphq/2.webp',
    title: 'Серікулы Рамазан',
    text: 'Серікулы Рамазан'
  },
  {
    id: 3,
    image: '/public/resources/webphq/3.webp',
    title: 'Тушжанов Мади',
    text: 'Тушжанов Мади'
  },
  {
    id: 4,
    image: '/public/resources/webphq/4.webp',
    title: 'Ибрагим Даурен',
    text: 'Ибрагим Даурен'
  },
  {
    id: 5,
    image: '/public/resources/webp/5.webp',
    title: 'Абикенова Нурлы',
    text: 'Абикенова Нурлы'
  },
  {
    id: 6,
    image: '/public/resources/webp/6.webp',
    title: 'Сансызбай Байнур',
    text: 'Сансызбай Байнур'
  },
  {
    id: 7,
    image: '/public/resources/webp/7.webp',
    title: 'Қуаныш Кевлинжан',
    text: 'Қуаныш Кевлинжан'
  },
  {
    id: 8,
    image: '/public/resources/webp/8.webp',
    title: 'Ерзатулы Әділжан',
    text: 'Ерзатулы Әділжан'
  }
])

</script>

<template>
  <div class="rounded-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105"
    >
      <!-- Исправленный v-lazy -->
      <img 
        v-lazy="card.image"
        :alt="card.title"
        class="w-100 h-120 object-cover"
      >
      <div class="p-6">
        <h3 class="text-2xl font-bold text-gray-900 mb-3">
          {{ card.title }}
        </h3>
        <p class="text-gray-700 text-base leading-7">
          {{ card.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Стили для состояния загрузки */
img[lazy=loading] {
  background: #f0f0f0;
  height: 160px;
}

img[lazy=error] {
  background: #ff000020;
}

img[lazy=loaded] {
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
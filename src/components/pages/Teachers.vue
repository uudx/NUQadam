<script setup>
import { ref } from 'vue'

// Импортируем все изображения
import png1 from '../resources/1.png'
import png2 from '../resources/2.png'
import png3 from '../resources/3.png'
import png4 from '../resources/4.png'
import png5 from '../resources/5.png'
import png6 from '../resources/6.png'
import png7 from '../resources/7.png'
import png8 from '../resources/8.png'

const cards = ref([
  {
    image: png1,
    title: 'Әбжан Бауыржан',
    text: 'Әбжан Бауыржан'
  },
  {
    image: png2,
    title: 'Серікулы Рамазан',
    text: 'Серікулы Рамазан'
  },
  {
    image: png3,
    title: 'Тушжанов Мади',
    text: 'Тушжанов Мади'
  },
  {
    image: png4,
    title: 'Ибрагим Даурен',
    text: 'Ибрагим Даурен'
  },
  {
    image: png5,
    title: 'Абикенова Нурлы',
    text: 'Абикенова Нурлы'
  },
  {
    image: png6,
    title: 'Сансызбай Байнур',
    text: 'Сансызбай Байнур'
  },
  {
    image: png7,
    title: 'Қуаныш Кевлинжан',
    text: 'Қуаныш Кевлинжан'
  },
  {
    image: png8,
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
        class="w-full h-40 object-cover"
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
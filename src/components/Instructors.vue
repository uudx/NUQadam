<script setup>
import { ref } from 'vue';
const base = import.meta.env.BASE_URL

const cards = ref([
  {
    id: 1,
    image: `${base}/resources/webp/pfp/1.webp?url`,
    name: 'Әбжан Бауыржан',
    title: 'Мұғалім'
  },
  {
    id: 2,
    image: `${base}/resources/webp/pfp/2.webp?url`,
    name: 'Серікулы Рамазан',
    title: 'Мұғалім'
  },
  {
    id: 3,
    image: `${base}/resources/webp/pfp/3.webp?url`,
    name: 'Тушжанов Мади',
    title: 'Мұғалім'
  },
  {
    id: 4,
    image: `${base}/resources/webp/pfp/4.webp?url`,
    name: 'Ибрагим Даурен',
    title: 'Қалаушы'
  },
  {
    id: 5,
    image: `${base}/resources/webp/pfp/5.webp?url`,
    name: 'Абикенова Нурлы',
    title: 'Мұғалім'
  },
  {
    id: 6,
    image: `${base}/resources/webp/pfp/6.webp?url`,
    name: 'Сансызбай Байнур',
    title: 'Мұғалім'
  },
  {
    id: 7,
    image: `${base}/resources/webp/pfp/7.webp?url`,
    name: 'Қуаныш Кевлинжан',
    title: 'Мұғалім'
  },
  {
    id: 8,
    image: `${base}/resources/webp/pfp/8.webp?url`,
    name: 'Ерзатулы Әділжан',
    title: 'Мұғалім'
  }
])

</script>

<template>
  <section class="py-16 px-6 lg:px-8 bg-gray-100 dark:bg-black">
    <div class="container mx-auto">
      <h2 class="text-4xl font-extrabold text-center text-blue-800 dark:text-blue-400">
        Біздің оқытушылар құрамы
      </h2>
      <router-link to="/teachers">
        <h4 class="text-xl font-extrabold text-center text-gray-700/40 dark:text-gray-300/40 mb-6">
          Толығырақ
        </h4>
      </router-link>
      <div class="flex flex-wrap justify-center gap-8">
        <div
          v-for="teacher in cards"
          :key="teacher.id"
          class="w-full sm:w-64 md:w-72 bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <div class="p-6 text-center">
            <div class="w-24 h-24 rounded-full mx-auto flex items-center justify-center text-white opacity-90 bg-linear-to-br from-blue-400 to-indigo-600 mb-4 shadow-lg">
              <img 
                :src="teacher.image"
                :alt="teacher.name"
                loading="lazy"
              >
            </div>
            
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">{{ teacher.name }}</h4>
            <p class="text-sm text-blue-600 dark:text-blue-400 mb-4">{{ teacher.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.flex-shrink-0 {
  flex-shrink: 0;
}
</style>
<template>
  <div class="dark:bg-gray-900 min-h-screen py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="mb-8">
        <router-link 
          :to="{ name: 'Teachers' }" 
          class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-bold text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Барлық ұстаздар тізіміне оралу
        </router-link>
      </div>

      <div v-if="teacher" class="flex flex-col md:flex-row items-start bg-white dark:bg-gray-800 shadow-2xl rounded-xl">
        
        <div class="w-full md:w-1/2 p-8 order-2 md:order-1">
          <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 border-b dark:border-gray-700 pb-2">
            {{ teacher.name }}
          </h1>
          
          <div v-for="(mainItem, index) in teacher.about" :key="index" class="mb-6">
            <h3 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
              {{ mainItem[0] }}
            </h3>
            
            <ul class="space-y-2 list-none p-0 ml-0">
              <li 
                v-for="(subItem, subIndex) in mainItem.slice(1)" 
                :key="subIndex" 
                class="flex items-start text-gray-700 dark:text-gray-300"
              >
                <svg class="flex-shrink-0 w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{{ subItem }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full md:w-1/2 p-8 order-1 md:order-2 flex justify-center bg-gray-50 dark:bg-gray-700 rounded-t-xl md:rounded-l-none md:rounded-r-xl">
          <div class="max-w-md w-full">
            <img 
              :src="getImagePath(teacher.image)" 
              :alt="`Портрет ${teacher.name}`"
              class="w-full h-auto object-cover rounded-xl shadow-2xl"
            >
          </div>
        </div>

      </div>
      <div v-else class="text-center py-10">
        <p class="text-2xl text-red-500">Мұғалім табылмады (ID: {{ id }}).</p>
      </div>

    </div>
  </div>
</template>

<script>
import { cards } from '@/data/teachers.js'; // Убедитесь, что путь правильный

export default {
  // Получаем id из маршрута через пропсы
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      teacher: null
    };
  },
  computed: {
    // Вспомогательная функция, дублирующая логику из Teachers.vue для корректного отображения изображения
    getImagePath() {
      const base = import.meta.env.BASE_URL;
      return (imagePath) => {
        if (!imagePath) return '';
        const cleanPath = imagePath.replace('?url', '').replace(/^\/\//, '/');
        return cleanPath.startsWith('/') ? `${base}${cleanPath.slice(1)}` : `${base}${cleanPath}`;
      };
    }
  },
  created() {
    // 1. Конвертируем id из маршрута в число
    const teacherId = parseInt(this.id);
    
    // 2. Ищем элемент в массиве cards (доступ к .value нужен, так как cards - это ref)
    if (cards.value) {
      this.teacher = cards.value.find(t => t.id === teacherId);
    }
  }
};
</script>
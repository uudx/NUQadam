<template>
  <div class="dark:bg-gray-900 min-h-screen">
    <div class="w-full p-4">
      <router-link 
        to="/" 
        class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#b12c00] dark:hover:text-blue-400 transition-colors font-bold text-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Басты бетке оралу
      </router-link>
    </div>
    
    <div class="rounded-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 pb-6 dark:bg-gray-900">
      <div
        v-for="(card) in cards"
        :key="card.id"
        class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:shadow-blue-300 dark:hover:shadow-blue-900/50 dark:shadow-gray-900"
      >
        <img 
          v-lazy="card.image"
          :alt="card.title"
          class="w-full h-120 object-cover"
        >
        <div class="p-6">
          <h3 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-5 border-b dark:border-gray-700 pb-3"> {{ card.title }}
          </h3>
          
          <div class="space-y-4 text-sm">
            
            <div 
              v-for="(block, blockIndex) in card.about"
              :key="blockIndex"
              
              :class="getBlockColors(blockIndex)" 
              class="rounded-lg p-3 relative overflow-hidden transition-colors duration-200" 
            >
              <ul class="space-y-1 relative z-10">
                <li 
                  v-for="(line, lineIndex) in block"
                  :key="lineIndex"
                  class="flex items-start"
                >
                  <span 
                    :class="{
                      'font-extrabold text-base mb-1 block w-full': lineIndex === 0,
                      [getColor('header', blockIndex)]: lineIndex === 0,
                      [getColor('text', blockIndex)]: lineIndex !== 0,
                    }"
                  >
                    <template v-if="lineIndex !== 0">
                      <svg 
                        class="inline w-3 h-3 mr-2 fill-current align-text-top" 
                        viewBox="0 0 20 20"
                        :class="getColor('bullet', blockIndex)"
                      >
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                    </template>
                    {{ line }}
                  </span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { cards } from '../../data/teachers.js';

const colorPalettes = [
  { 
    bg: 'bg-indigo-100 dark:bg-indigo-900/40', 
    text: 'text-indigo-800 dark:text-indigo-200', 
    bullet: 'text-indigo-600 dark:text-indigo-400', 
    header: 'text-indigo-900 dark:text-indigo-100' 
  },
  { 
    bg: 'bg-emerald-100 dark:bg-emerald-900/40', 
    text: 'text-emerald-800 dark:text-emerald-200', 
    bullet: 'text-emerald-600 dark:text-emerald-400', 
    header: 'text-emerald-900 dark:text-emerald-100' 
  },
  { 
    bg: 'bg-rose-100 dark:bg-rose-900/40', 
    text: 'text-rose-800 dark:text-rose-200', 
    bullet: 'text-rose-600 dark:text-rose-400', 
    header: 'text-rose-900 dark:text-rose-100' 
  },
  { 
    bg: 'bg-yellow-100 dark:bg-yellow-900/40', 
    text: 'text-yellow-800 dark:text-yellow-200', 
    bullet: 'text-yellow-600 dark:text-yellow-400', 
    header: 'text-yellow-900 dark:text-yellow-100' 
  },
  { 
    bg: 'bg-purple-100 dark:bg-purple-900/40', 
    text: 'text-purple-800 dark:text-purple-200', 
    bullet: 'text-purple-600 dark:text-purple-400', 
    header: 'text-purple-900 dark:text-purple-100' 
  },
];

const getBlockColors = (index) => {
  const palette = colorPalettes[index % colorPalettes.length];
  return [palette.bg, palette.text]; 
};

const getColor = (type, index) => {
  const palette = colorPalettes[index % colorPalettes.length];
  return palette[type];
};
</script>
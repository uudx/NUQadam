<template>
  <section class="bg-white dark:bg-[#030712] py-20 px-6 transition-colors duration-300">
    <div class="max-w-5xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
          Қолжетімді бағалар,
          <span class="text-[#b12c00]"> нақты нәтиже</span>
        </h2>
        <p class="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Біз сапалы білім әр отбасына қол жетімді болуы керек деп санаймыз. Сондықтан бағаларымыз қаладағы беделді репетитордан 2–3 есе төмен — ал сапа одан жоғары.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

        <!-- STARTER -->
        <div class="border border-gray-200 dark:border-white/10 rounded-3xl p-8 flex flex-col bg-white dark:bg-[#0f1623] transition-colors duration-300">
          <div class="mb-6">
            <span class="text-xs font-semibold px-3 py-1.5 rounded-full bg-red-50 text-[#b12c00] dark:bg-[#b12c00]/20 dark:text-red-300">
              Топтық сабақтар
            </span>
          </div>

          <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-1">STARTER</h3>
          <p class="text-sm text-gray-400 dark:text-gray-500 mb-6">Шағын топ (3–5 оқушы) · Аптасына 4 сабақ (60 мин)</p>

          <div class="mb-1">
            <span class="text-sm text-gray-400 dark:text-gray-500">Бастапқы баға</span>
          </div>
          <div class="flex items-end gap-2 mb-1">
            <span class="text-5xl font-black text-gray-900 dark:text-white">20 000</span>
            <span class="text-gray-400 dark:text-gray-500 mb-2 text-sm">тг / айына</span>
          </div>
          <p class="text-sm text-gray-400 dark:text-gray-500 mb-8">немесе 1 250 тг / сабақ · Алдын ала төлеу шарт емес</p>

          <hr class="border-gray-100 dark:border-white/10 mb-8" />

          <ul class="flex flex-col gap-3 flex-grow mb-10">
            <li v-for="f in starterFeatures" :key="f" class="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
              <CheckCircleIcon class="w-5 h-5 text-[#b12c00] shrink-0 mt-0.5" />
              {{ f }}
            </li>
          </ul>

          <button
            @click="navigateToWhatsApp"
            class="w-full py-4 rounded-2xl bg-red-50 dark:bg-[#b12c00]/20 text-[#b12c00] dark:text-red-300 font-bold text-sm hover:bg-red-100 dark:hover:bg-[#b12c00]/30 transition-all flex items-center justify-center gap-2">
            Жазылу
            <ArrowRightIcon class="w-4 h-4" />
          </button>
        </div>

        <!-- STANDARD -->
        <div class="rounded-3xl p-8 flex flex-col relative transition-colors duration-300 bg-[#0f1e3a] dark:bg-[#0a1628] text-white">
          <!-- Popular badge -->
          <div class="absolute -top-4 left-1/2 -translate-x-1/2">
            <span class="px-4 py-1.5 rounded-full bg-[#b12c00] text-white text-xs font-bold shadow-lg whitespace-nowrap">
              ⭐ Ең танымал
            </span>
          </div>

          <div class="mb-6">
            <span class="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-blue-200">
              Жеке сабақтар
            </span>
          </div>

          <h3 class="text-2xl font-black text-white mb-1">STANDARD</h3>
          <p class="text-sm text-blue-200/60 mb-6">1:1 формат, толық назар · Аптасына 3 сабақ (60 мин)</p>

          <div class="mb-1">
            <span class="text-sm text-blue-200/60">Бастапқы баға</span>
          </div>
          <div class="flex items-end gap-2 mb-1">
            <span class="text-5xl font-black text-white">36 000</span>
            <span class="text-blue-200/60 mb-2 text-sm">тг / айына</span>
          </div>
          <p class="text-sm text-blue-200/60 mb-8">немесе 3 000 тг / сабақ · Алдын ала төлеу шарт емес</p>

          <hr class="border-white/10 mb-8" />

          <ul class="flex flex-col gap-3 flex-grow mb-10">
            <li v-for="f in standardFeatures" :key="f" class="flex items-start gap-3 text-sm text-blue-100">
              <CheckCircleIcon class="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              {{ f }}
            </li>
          </ul>

          <button 
            @click="navigateToWhatsApp"
            class="w-full py-4 rounded-2xl bg-[#b12c00] text-white font-bold text-sm hover:bg-[#c93200] transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/30">
            Жазылу
            <ArrowRightIcon class="w-4 h-4" />
          </button>
        </div>

      </div>

      <!-- Free first lesson banner -->
      <div class="rounded-3xl border border-dashed border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-8 py-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <span class="text-3xl">🎁</span>
        <div>
          <p class="font-bold text-gray-900 dark:text-white text-base">Бірінші сабақ — әрқашан тегін</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Ұстазбен танысу, деңгейіңді анықтау, мақсатты келісу.</p>
        </div>
        <button
            @click="navigateToWhatsApp"
            class="sm:ml-auto shrink-0 px-6 py-3 rounded-2xl bg-[#b12c00] text-white font-bold text-sm hover:bg-[#c93200] transition-all whitespace-nowrap shadow-md">
          Тегін сабақ алу →
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue';
import { whatsappLink } from '../data/socials.js'

const starterFeatures = [
  'Жеке оқу жоспары',
  'Барлық материалдар онлайн',
  'Апта сайынғы тест',
  'Сабақтардың видео жазбасы',
  'Үй тапсырмасы тексеру',
]

const standardFeatures = [
  'Жеке оқу жоспары',
  'Барлық материалдар онлайн',
  'Апта сайынғы тест + талдау',
  'Сабақтардың видео жазбасы',
  'Ата-аналарға ай сайынғы есеп',
  'Үй тапсырмасы тексеру',
]

const navigateToWhatsApp = () => {
  window.open(whatsappLink.href, '_blank');
}
</script>
<template>
  <section class="bg-white dark:bg-[#030712] pb-20 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
          Біздің бағдарламаларымыз
        </h2>
        <p class="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Сенің мақсатың не болса да — бізде соған сай бағдарлама бар. Бәрі бір орталықта.
        </p>
      </div>

      <!-- Scroll area with buttons -->
      <div class="relative flex items-center gap-3">

        <!-- Left button -->
        <button
          @click="scroll(-1)"
          class="shrink-0 w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          aria-label="Солға"
        >
          <ChevronLeftIcon class="w-5 h-5" />
        </button>

        <!-- Track -->
        <div
          ref="track"
          class="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth flex-1"
          style="scrollbar-width: none;"
        >
          <div
            v-for="program in programs"
            :key="program.id"
            class="group relative shrink-0 snap-start card-width"
          >
            <!-- Hover glow -->
            <div :class="`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 rounded-2xl bg-gradient-to-br ${program.glow}`"></div>

            <!-- Card -->
            <div class="h-full bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-white/10 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/60">

              <!-- Icon -->
              <div :class="`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.theme} flex items-center justify-center mb-6 shadow-lg group-hover:rotate-[8deg] transition-transform duration-300`">
                <component :is="program.icon" class="w-7 h-7 text-white" />
              </div>

              <h3 :class="`text-lg font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-200 ${program.hoverText}`">
                {{ program.title }}
              </h3>

              <p class="text-gray-500 dark:text-gray-400 leading-relaxed text-sm flex-grow mb-6">
                {{ program.desc }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in program.tags"
                  :key="tag"
                  :class="`text-xs font-medium px-3 py-1 rounded-full ${program.tagStyle}`"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <div class="shrink-0 w-1"></div>
        </div>

        <!-- Right button -->
        <button
          @click="scroll(1)"
          class="shrink-0 w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          aria-label="Оңға"
        >
          <ChevronRightIcon class="w-5 h-5" />
        </button>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  ClipboardDocumentListIcon,
  GlobeAltIcon,
  SpeakerWaveIcon,
  AcademicCapIcon,
  BookOpenIcon,
  TrophyIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/vue/24/outline'

const track = ref(null)
const cardWidth = ref(300)

function updateCardWidth() {
  const trackEl = track.value
  if (!trackEl) return
  const available = trackEl.clientWidth
  const cols = available >= 900 ? 4 : available >= 500 ? 2 : 1
  const gap = (cols - 1) * 20
  cardWidth.value = Math.floor((available - gap) / cols)
  document.documentElement.style.setProperty('--card-w', cardWidth.value + 'px')
}

function scroll(dir) {
  if (track.value) {
    track.value.scrollBy({ left: dir * (cardWidth.value + 20), behavior: 'smooth' })
  }
}

onMounted(() => {
  updateCardWidth()
  window.addEventListener('resize', updateCardWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateCardWidth)
})

const programs = [
  {
    id: 1,
    title: 'ҰБТ дайындығы',
    desc: 'Барлық таңдау пәндері бойынша. Шынайы тест базасы, әр аптада mock-ҰБТ, баллыңды әр аптада өлшейміз.',
    icon: ClipboardDocumentListIcon,
    theme: 'from-blue-500 to-cyan-400',
    glow: 'from-blue-500 to-cyan-400',
    hoverText: 'group-hover:text-blue-500 dark:group-hover:text-blue-300',
    tagStyle: 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    tags: ['Mock-тест', 'Апта сайын', 'Барлық пәндер']
  },
  {
    id: 2,
    title: 'SAT дайындығы',
    desc: 'Math, Reading, Writing — үш секцияға да терең дайындық. Mock SAT-тар, эссе тексеру, scholarship стратегиясы.',
    icon: GlobeAltIcon,
    theme: 'from-indigo-500 to-purple-500',
    glow: 'from-indigo-500 to-purple-500',
    hoverText: 'group-hover:text-indigo-500 dark:group-hover:text-indigo-300',
    tagStyle: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
    tags: ['АҚШ / Канада', 'Эссе тексеру', 'Scholarship']
  },
  {
    id: 3,
    title: 'IELTS дайындығы',
    desc: '4 секция: Listening, Reading, Writing, Speaking. Ауызша сөйлеу практикасы — әр сабақ. Мақсат — 7.0+.',
    icon: SpeakerWaveIcon,
    theme: 'from-emerald-500 to-teal-400',
    glow: 'from-emerald-500 to-teal-400',
    hoverText: 'group-hover:text-emerald-500 dark:group-hover:text-emerald-300',
    tagStyle: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    tags: ['7.0+ мақсат', 'Speaking практика', '4 секция']
  },
  {
    id: 4,
    title: 'Элиталық мектептерге дайындық',
    desc: 'НЗМ, ҚТЛ, РФММ, БИЛ — әр мектептің кіру емтиханының форматы бөлек. Біз әрқайсысына жеке дайындаймыз.',
    icon: AcademicCapIcon,
    theme: 'from-amber-500 to-orange-400',
    glow: 'from-amber-500 to-orange-400',
    hoverText: 'group-hover:text-amber-500 dark:group-hover:text-amber-300',
    tagStyle: 'bg-amber-50 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
    tags: ['НЗМ', 'ҚТЛ', 'РФММ', 'БИЛ']
  },
  {
    id: 5,
    title: 'Мектеп пәндері (1–11 сынып)',
    desc: 'Математика, физика, химия, биология, тілдер, тарих және т.б. Үй тапсырмасы көмегі, тоқсандық бақылауға дайындық.',
    icon: BookOpenIcon,
    theme: 'from-rose-500 to-pink-500',
    glow: 'from-rose-500 to-pink-500',
    hoverText: 'group-hover:text-rose-500 dark:group-hover:text-rose-300',
    tagStyle: 'bg-rose-50 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
    tags: ['1–11 сынып', 'Барлық пәндер', 'Үй тапсырмасы']
  },
  {
    id: 6,
    title: 'Олимпиадаға дайындық',
    desc: 'Қалалық, облыстық, республикалық деңгейдегі олимпиадалар. Тұрақты есеп шығару практикасы.',
    icon: TrophyIcon,
    theme: 'from-yellow-500 to-amber-400',
    glow: 'from-yellow-500 to-amber-400',
    hoverText: 'group-hover:text-yellow-600 dark:group-hover:text-yellow-300',
    tagStyle: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
    tags: ['Қалалық', 'Облыстық', 'Республикалық']
  }
]
</script>

<style scoped>
.card-width {
  width: var(--card-w, 300px);
}
div::-webkit-scrollbar {
  display: none;
}
</style>
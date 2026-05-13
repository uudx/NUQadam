<script setup>
import {
  RectangleGroupIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ChartBarIcon,
  BoltIcon,
  GlobeAltIcon,
} from '@heroicons/vue/24/outline'
import { ref, onMounted, onUnmounted } from 'vue'

const cards = [
  {
    id: 1,
    title: "Жеке оқу жоспары",
    desc: "Біз сенің деңгейіңді анықтап, тек саған арналған 'Smart Path' құрамыз. Конвейерсіз, тек жеке даму.",
    icon: RectangleGroupIcon,
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    iconColor: "text-blue-500 dark:text-blue-400",
  },
  {
    id: 2,
    title: "NU Expert Ұстаздары",
    desc: "Назарбаев Университетінің топ-студенттері мен түлектері. Олар ҰБТ мен SAT-ты 'шаққан' практиктер.",
    icon: AcademicCapIcon,
    iconBg: "bg-indigo-100 dark:bg-indigo-900/40",
    iconColor: "text-indigo-500 dark:text-indigo-400",
  },
  {
    id: 3,
    title: "1:1 Интерактив",
    desc: "Жеке форматтағы фокус немесе топтық жарыс рухы. Кез келген сұраққа сол мезетте жауап аласың.",
    icon: UserGroupIcon,
    iconBg: "bg-purple-100 dark:bg-purple-900/40",
    iconColor: "text-purple-500 dark:text-purple-400",
  },
  {
    id: 4,
    title: "Прогресс-бақылау",
    desc: "Апта сайынғы Mock-тесттер мен толық аналитика. Қай тақырыптан қалып жатқаныңды нақты көресің.",
    icon: ChartBarIcon,
    iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
    iconColor: "text-emerald-500 dark:text-emerald-400",
  },
  {
    id: 5,
    title: "Тиімді инвестиция",
    desc: "Сапалы білім қолжетімді болуы керек. Нарықтан 3 есе арзан бағамен премиум деңгейдегі сабақтар.",
    icon: BoltIcon,
    iconBg: "bg-amber-100 dark:bg-amber-900/40",
    iconColor: "text-amber-500 dark:text-amber-400",
  },
  {
    id: 6,
    title: "Шексіз еркіндік",
    desc: "Zoom/Google Meet арқылы әлемнің кез келген нүктесінен қосыл. Барлық жазбалар өмір бойы қалады.",
    icon: GlobeAltIcon,
    iconBg: "bg-rose-100 dark:bg-rose-900/40",
    iconColor: "text-rose-500 dark:text-rose-400",
  },
]

const track = ref(null)
const paused = ref(false)
const animFrame = ref(null)
const speed = 0.6
let pos = 0
let resumeTimer = null

// mouse drag state
let isDragging = false
let dragStartX = 0
let dragStartPos = 0

function step() {
  if (!track.value) return
  if (!paused.value) {
    pos += speed
    const half = track.value.scrollWidth / 2
    if (pos >= half) pos = 0
    track.value.scrollLeft = pos
  }
  animFrame.value = requestAnimationFrame(step)
}

function pause() {
  clearTimeout(resumeTimer)
  paused.value = true
}

function resumeAfterDelay() {
  clearTimeout(resumeTimer)
  resumeTimer = setTimeout(() => {
    // sync pos from actual scrollLeft before handing back to auto-scroller
    if (track.value) pos = track.value.scrollLeft
    paused.value = false
  }, 1000)
}

function onWheel(e) {
  if (!track.value) return
  e.preventDefault()
  pause()
  pos = Math.max(0, pos + e.deltaY * 0.5)
  track.value.scrollLeft = pos
  resumeAfterDelay()
}

// mouse drag
function onMouseDown(e) {
  isDragging = true
  pause()
  dragStartX = e.clientX
  dragStartPos = pos
  track.value.style.cursor = 'grabbing'
}

function onMouseMove(e) {
  if (!isDragging) return
  const delta = dragStartX - e.clientX
  pos = Math.max(0, dragStartPos + delta)
  track.value.scrollLeft = pos
}

function onMouseUp() {
  if (!isDragging) return
  isDragging = false
  if (track.value) track.value.style.cursor = 'grab'
  resumeAfterDelay()
}

// touch — let the browser handle native scrolling, just sync pos on end
function onTouchStart() {
  pause()
}

function onTouchEnd() {
  // wait a tick for browser to finish its momentum scroll, then sync
  setTimeout(() => {
    if (track.value) pos = track.value.scrollLeft
    resumeAfterDelay()
  }, 100)
}

function onMouseEnter() {
  clearTimeout(resumeTimer)
  paused.value = true
}

function onMouseLeave() {
  if (!isDragging) {
    if (track.value) pos = track.value.scrollLeft
    paused.value = false
  }
}

onMounted(() => {
  animFrame.value = requestAnimationFrame(step)
  track.value?.addEventListener('wheel', onWheel, { passive: false })
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
})

onUnmounted(() => {
  cancelAnimationFrame(animFrame.value)
  clearTimeout(resumeTimer)
  track.value?.removeEventListener('wheel', onWheel)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
})
</script>

<template>
  <section class="relative bg-white dark:bg-black text-gray-900 dark:text-white py-20 overflow-hidden font-sans transition-colors duration-300">
    <!-- Fade edges -->
    <div class="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white dark:from-black to-transparent"></div>
    <div class="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white dark:from-black to-transparent"></div>

    <!-- Scrolling track -->
    <div
      ref="track"
      class="flex gap-6 overflow-x-auto select-none"
      style="scrollbar-width: none; -webkit-overflow-scrolling: touch; cursor: grab;"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      @mousedown="onMouseDown"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <template v-for="pass in 2" :key="pass">
        <div
          v-for="item in cards"
          :key="`${pass}-${item.id}`"
          class="shrink-0 w-72 bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-white/10 rounded-3xl p-8 flex flex-col transition-colors duration-300"
        >
          <div :class="`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${item.iconBg}`">
            <component :is="item.icon" :class="`w-7 h-7 ${item.iconColor}`" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white leading-snug">
            {{ item.title }}
          </h3>
          <p class="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
            {{ item.desc }}
          </p>
        </div>
      </template>
      <div class="shrink-0 w-6"></div>
    </div>

  </section>
</template>

<style scoped>
div::-webkit-scrollbar { display: none; }
</style>
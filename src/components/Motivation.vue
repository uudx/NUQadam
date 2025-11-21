<template>
  <!-- Section 1 -->
    <div class="bg-white dark:bg-black py-16">
      <section class="container mx-auto px-6 lg:px-8 mb-16">
        <div class="relative">
          <div class="lg:w-3/5 lg:ml-auto rounded-lg shadow-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center h-75 lg:h-100 lg:pl-16">
            <img :src="goalImage" class="h-full" aria-hidden="true">
          </div>
          <div class="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:w-1/2 bg-[#b12c00] text-white p-8 lg:p-12 rounded-lg shadow-2xl mt-8 lg:mt-0">
            <h2 class="text-3xl font-bold mb-4">Біздің мақсат</h2>
            <p class="text-lg text-gray-200 leading-relaxed">
              Біз беделді университеттердің үздік студент-оқытушыларын біріктіріп, ауылдық өңірдегі оқушыларға сапалы білімге қол жеткізу мүмкіндігін ұсынамыз. 
              Мақсатымыз - олардың академиялық әлеуетін ашып, болашақта шетел университеттерге жол көрсету.
            </p>
          </div>
        </div>
      </section>

    <!-- Section 2 -->
      <section class="container mx-auto px-6 lg:px-8 mt-24">
        <div class="relative">
          <div class="lg:w-3/5 rounded-lg shadow-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-left h-55 lg:h-80 lg:pr-32 overflow-hidden">
            <img :src="weofferImage" class="lg:w-full object-cover" aria-hidden="true">
          </div>
          <div class="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:w-1/2 bg-gray-900 text-white p-8 lg:p-12 rounded-lg shadow-2xl mt-8 lg:mt-0">
            <h2 class="text-3xl font-bold mb-4 text-blue-400">Біз Не Ұсынамыз</h2>
            <p class="text-lg text-gray-300 leading-relaxed">
              Заманауи әдістемеге негізделген интерактивті оқу жүйесі ағылшын тілін тиімді әрі түсінікті форматта үйретеді. 
              Біздің әдістеміз нақты нәтижеге жылдам жеткізу үшін әр оқушының деңгейіне бейімделіп, жеке қолдау мен практикалық тапсырмалар ұсынады.
            </p>
          </div>
        </div>
      </section>
  </div>
</template>

<script setup>
const base = import.meta.env.BASE_URL

const weofferImage = `${base}resources/webp/visuals/weoffer.webp`
const goalImage = `${base}resources/webp/visuals/goal.webp`
</script>

<style scoped>
</style>
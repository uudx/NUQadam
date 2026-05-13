<template>
  <div class="bg-white dark:bg-black py-16">

    <!-- Section 1 -->
    <section class="container mx-auto px-6 lg:px-8 mb-16">
      <div class="relative group/sec1">
        <div class="lg:w-3/5 lg:ml-auto rounded-lg shadow-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center h-75 lg:h-100 lg:pl-16 transition-transform duration-500 group-hover/sec1:translate-x-2">
          <img :src="goalImage" class="h-full transition-transform duration-500 group-hover/sec1:scale-[1.02]" aria-hidden="true" />
        </div>
        <div class="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:w-1/2 bg-[#b12c00] text-white p-8 lg:p-12 rounded-lg shadow-2xl mt-8 lg:mt-0 transition-all duration-500 group-hover/sec1:-translate-x-2 group-hover/sec1:shadow-[#b12c00]/40 group-hover/sec1:shadow-2xl">
          <h2 class="text-3xl font-bold mb-4">Біздің мақсат</h2>
          <p class="text-lg text-gray-200 leading-relaxed">
            Біздің мақсат — Қазақстанның әр түкпіріндегі оқушыға сапалы білімге тең мүмкіндік беру.
            Назарбаев Университетінің үздік студенттерін біріктіріп, балаларды ҰБТ-ға, халықаралық
            емтихандарға (SAT, IELTS) және елдегі үздік мектептерге (НИШ, КТЛ, РФМШ) дайындаймыз.
            Біз оқушылардың академиялық әлеуетін ашып, оларға әлемдік деңгейдегі университеттерге жол ашамыз.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="container mx-auto px-6 lg:px-8 mt-24">
      <div class="relative group/sec2">
        <div class="lg:w-3/5 rounded-lg shadow-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-left h-55 lg:h-80 lg:pr-32 overflow-hidden transition-transform duration-500 group-hover/sec2:-translate-x-2">
          <img :src="weofferImage" class="lg:w-full object-cover transition-transform duration-500 group-hover/sec2:scale-[1.02]" aria-hidden="true" />
        </div>
        <div class="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:w-1/2 bg-gray-900 text-white p-8 lg:p-12 rounded-lg shadow-2xl mt-8 lg:mt-0 transition-all duration-500 group-hover/sec2:translate-x-2 group-hover/sec2:shadow-blue-500/20 group-hover/sec2:shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 text-blue-400">
            Sally Academy — толық қызмет көрсететін онлайн академия.
          </h2>
          <p class="text-lg text-gray-300 leading-relaxed">
            Бізде сен: <br />
            ✓ Барлық мектеп пәндері бойынша сабақ ала аласың (1–11 сынып) <br />
            ✓ ҰБТ, SAT, IELTS емтихандарына дайындала аласың <br />
            ✓ НИШ, КТЛ, РФМШ кіру емтихандарына дайындала аласың <br />
            ✓ Жеке немесе шағын топта оқи аласың <br />
            ✓ Қалаған уақытта, қалаған жерден қосыла аласың <br />
            Әр оқушыға — өзіне сай бағдарлама, өзіне сай ұстаз, өзіне сай темп.
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
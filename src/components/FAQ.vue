<script setup>
import { ref } from 'vue';

const openFAQ = ref(null); // Holds the ID of the open question

const faqList = ref([
  { id: 1, question: 'Sally Academy қалай жұмыс істейді?', answer: 'Сен алдымен тегін кеңеске жазыласың — біз сенің мақсатыңды, деңгейіңді, қалаған бағытыңды талқылаймыз. Содан кейін саған ыңғайлы ұстазды ұсынамыз, бірінші сабақ — тегін. Ұнаса — пакет таңдайсың, оқу басталады. Сабақтар Zoom немесе Google meet арқылы өтеді, барлық материалдар біздің платформада сақталады.' },
  { id: 2, question: 'Сабақтар қандай форматта өтеді?', answer: 'Барлық сабақ — онлайн, Zoom немесе Google meet арқылы. Тірі ұстазбен, нақты уақытта. Қосымша материалдар, тапсырмалар мен тесттер біздің оқу платформасында. Сабақтар жазылып отырады — кейін қайта көре аласың.' },
  { id: 3, question: 'Қандай пәндер мен бағдарламалар бар?', answer: 'Барлық мектеп пәндері (1–11 сынып), ҰБТ дайындығы, SAT, IELTS жәнеде үздік мектептер НЗМ, ҚТЛ, РФММ, БИЛ  кіру емтихандарына дайындық, олимпиадаға дайындық.' },
  { id: 4, question: 'Ұстаздарыңыз кімдер?', answer: 'Назарбаев Университетінің үздік студенттері мен түлектері — Орталық Азиядағы №1 университет. Барлығы — НЗМ, ҚТЛ, РФММ сияқты үздік мектептердің түлектері, ҰБТ, IELTS, SAT-тан жоғары балл иегерлері. Әр ұстазды сен сайттан көре аласың.' },
  { id: 5, question: 'Жеке және топтық сабақтың айырмашылығы қандай? Қайсын таңдау керек?', answer: 'Жеке сабақта ұстаз 100% сенің мәселеңмен айналысады, қарқын — өзіңе сай. Бұл әсіресе нақты әлсіз тұстарың бар болса немесе жоғары балл керек болса жақсы. Топтық сабақ — арзанырақ, достарыңмен бірге оқу мотивацияны арттырады, бір-біріңнен үйренесіңдер. Орта деңгейдегі оқушыларға өте тиімді. Тегін кеңесте біз қайсы саған дұрыс екенін бірге шешеміз. ' },
  { id: 6, question: 'Бағасы қанша?', answer: 'Бағаларымыз әр отбасына қолжетімді. Нақты сома пакетке, сабақ түріне (жеке/топтық) және сабақ санына байланысты. Бірінші кеңес пен бір сабақ — тегін.' },
  { id: 7, question: 'Ауылда тұрамын, интернет тұрақсыз. Сабаққа қатыса аламын ба?', answer: 'Иә, әрине. Біз әсіресе ауылдық өңірлерге бейімделген жұмыс істейміз. Сабақ жазылып отырады — интернет үзілсе, кейін қайта көре аласың. Материалдарды PDF немесе видео түрінде жүктеп алуға болады. Сабаққа телефоннан да қосыла аласың.' },
  { id: 8, question: 'Сабақты қалдырсам не болады?', answer: 'Алаңдама. Барлық сабақ жазылады, материалдар қолжетімді. Сонымен қатар, ұстазбен қосымша уаҡым белгІлеп, өткен сабакты талдай аласың.' },
  { id: 9, question: 'Қанша уақытта нәтиже көремін?', answer: 'Көп нәрсе сенің мақсатыңа, бастапқы деңгейіңе, оқуға бөлетін уақытыңа байланысты. Орташа есеппен, тұрақты оқыған оқушы 2–3 ай ішінде сезімтал ілгерілеу көреді. ҰБТ, SAT-қа толық дайындалу — 6–12 ай.' },
  { id: 10, question: 'Ата-ана ретінде баламның үлгерімін бақылай аламын ба?', answer: 'Иә. Ай сайын ата-аналарға толық есеп жіберіледі: қандай тақырыптар өтілді, тесттер нәтижесі, ұстаздың ұсыныстары. Қаласаңыз — өзіңіз де ұстазбен тікелей хабарласа аласыз.' },
  { id: 11, question: 'Бұған дейін репетиторда оқыдым, нәтиже жоқ. Сіздерде басқаша болады деп қалай сенемін?', answer: 'Сұрағыңыз орынды. Айырмашылықтарымыз:\n — Біздің ұстаздар — кездейсоқ адамдар емес, НУ-дың үздіктері.\n — Әр оқушыға — жеке оқу жоспары. "Бәріне бірдей сабақ" — бізде жоқ.\n — Аптасайын нәтиже өлшенеді — болжаммен жұмыс істемейміз.\n — Бірінші сабақ тегін — ұнамаса, ештеңе төлемейсіз.' },
]);

const toggleFAQ = (id) => {
  if (openFAQ.value === id) {
    openFAQ.value = null; // Close it
  } else {
    openFAQ.value = id; // Open it
  }
};

// --- Accordion Transition Methods ---
const onAccordionEnter = (el) => {
  el.style.height = 'auto';
  const height = getComputedStyle(el).height;
  el.style.height = '0';
  getComputedStyle(el);
  setTimeout(() => {
    el.style.height = height;
  });
};

const onAccordionLeave = (el) => {
  el.style.height = getComputedStyle(el).height;
  getComputedStyle(el);
  setTimeout(() => {
    el.style.height = '0';
  });
};
</script>

<template>
  <section class="container mx-auto py-16 px-6 lg:px-8 bg-white dark:bg-black">
    <h2 class="text-4xl font-extrabold text-center text-[#b12c00] dark:text-red-400 mb-12">Жиі қойылатын сұрақтар</h2>
    <div class="max-w-3xl mx-auto">
      <div 
        v-for="faq in faqList" 
        :key="faq.id" 
        class="border-b border-gray-200 dark:border-gray-700"
      >
        <button @click="toggleFAQ(faq.id)" class="flex justify-between items-center w-full py-6 text-left">
          <span class="text-xl font-bold text-gray-900 dark:text-white">{{ faq.question }}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6 shrink-0 text-[#b12c00] dark:text-red-400 transition-transform duration-300"
            :class="{'rotate-45': openFAQ === faq.id}"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <transition name="accordion" @enter="onAccordionEnter" @leave="onAccordionLeave">
          <div v-if="openFAQ === faq.id" class="overflow-hidden">
            <p class="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed pb-6 pr-8">
              {{ faq.answer }}
            </p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Vue Transition classes for the accordion.
*/
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
}
</style>
<script setup>
import { ref } from 'vue'

import { 
  socialButtons, 
  instagramLink, 
  phoneNumbers 
} from '../data/socials.js'

const isModalOpen = ref(false)

const handleContactSubmit = () => {
  alert('Form submitted! (This is a placeholder)')
  isModalOpen.value = false // Close modal on submit
}
</script>

<template>
    <section class="relative bg-black text-white overflow-hidden">
        <div class="absolute inset-0 z-0 w-full h-full bg-gray-800 flex items-center justify-center">
            <img src="/resources/webp/photos/0.webp" alt="Students learning English" class="w-full h-full object-cover opacity-30 dark:opacity-40">
            <div class="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30"></div>
        </div>

        <div class="relative z-10 container mx-auto flex flex-col lg:flex-row items-center min-h-screen pt-24 pb-16 px-6">
            <div class="lg:w-1/2">
                <div class="order-1">
                    <h1 class="z-10 text-4xl lg:text-6xl font-extrabold text-white"> Unlock Your </h1>
                    <h1 class="z-10 text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 mb-6 leading-normal"> English Potential </h1>
                </div>
                <p class="text-lg text-gray-300 leading-relaxed mb-12 order-2 lg:order-3">
                Our online English course is meticulously designed to empower learners from rural ares with comprehensive language skills. Start your journey to prosperity today.
                </p>
                <div class="mt-12">
                    <button 
                        @click="isModalOpen = true"
                        type="button"
                        class="bg-[#b12c00] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-800 transition duration-300 transform hover:scale-105 mx-2"
                    >
                        Contact Us
                    </button>
                    <router-link to="/teachers">
                        <button class="bg-transparent border-2 border-gray-500 text-gray-300 hover:border-white hover:text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 mx-2">
                            See Teachers
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <Transition name="modal">
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
      @click.self="isModalOpen = false"
    >
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg p-6 relative"
      >
        <button
          @click="isModalOpen = false"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Out Contacts
        </h2>

        <div>
          <div class="space-y-3">
            
            <div class="grid grid-cols-2 gap-3">
              <a
                v-for="social in socialButtons"
                :key="social.name"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                  'flex w-full items-center justify-center gap-x-2 rounded-lg px-3 py-3 text-sm font-semibold text-white transition-colors',
                  social.class
                ]"
              >
                <component :is="social.icon" class="size-8" aria-hidden="true" />
                <span>{{ social.name }}</span>
              </a>
            </div>
            
            <a
              :href="instagramLink.href"
              target="_blank"
              rel="noopener noreferrer"
              :class="[
                'flex w-full items-center justify-center gap-x-3 rounded-lg px-4 py-3 text-sm font-semibold text-white transition-opacity',
                instagramLink.class
              ]"
            >
              <component :is="instagramLink.icon" class="size-8" aria-hidden="true" />
              <span>{{ instagramLink.name }}</span>
            </a>
          </div>

          <div class="border-t border-gray-200/50 dark:border-white/10 pt-4 mt-4">
            
            <div class="flex items-center text-sm">
              
              <button
                type="button"
                @click="copyToClipboard(phoneNumbers[0].value)"
                class="flex-1 rounded-md px-2 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500
                       flex items-center justify-center"
              >
                <span v-if="copiedNumber === phoneNumbers[0].value" class="font-semibold text-green-500">
                  Copied!
                </span>
                <span v-else>
                  {{ phoneNumbers[0].number }}
                </span>
              </button>
              
              <div class="h-6 w-px bg-gray-300 dark:bg-white/20" aria-hidden="true"></div>

              <button
                type="button"
                @click="copyToClipboard(phoneNumbers[1].value)"
                class="flex-1 rounded-md px-2 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500
                       flex items-center justify-center"
              >
                <span v-if="copiedNumber === phoneNumbers[1].value" class="font-semibold text-green-500">
                  Copied!
                </span>
                <span v-else>
                  {{ phoneNumbers[1].number }}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
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
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
        
        <button 
          @click="isModalOpen = false" 
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          We're excited to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form @submit.prevent="handleContactSubmit">
          <div class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
              <input type="text" id="name" class="mt-1 px-1 block w-full rounded-md border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900" required>
            </div>
            <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Phone Number</label>
            
            <div class="mt-1 flex items-stretch rounded-md border border-gray-300 dark:border-gray-600 shadow-sm">
              
              <div class="flex items-center px-3 border-r border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 rounded-l-md">
                <span class="text-gray-500 dark:text-gray-400">+7</span>
              </div>

              <input 
                type="tel" 
                id="phone" 
                name="phone"
                autocomplete="tel"
                class="block w-full pl-1 grow border-none bg-white dark:bg-gray-700 dark:text-white text-gray-900 focus:ring-0 rounded-r-md" 
                placeholder=" (700) 123-4567" 
                required
              >
            </div>
          </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
              <textarea id="message" rows="4" class="mt-1 p-1 block w-full rounded-md border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900" required></textarea>
            </div>
            <div class="pt-2">
              <button 
                type="submit"
                class="w-full bg-[#b12c00] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-800 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
const isModalOpen = ref(false)

const handleContactSubmit = () => {
  alert('Form submitted! (This is a placeholder)')
  isModalOpen.value = false // Close modal on submit
}
</script>

<style scoped>
</style>
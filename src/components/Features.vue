<script setup>
import { PuzzlePieceIcon } from '@heroicons/vue/16/solid'
import { SparklesIcon, ChatBubbleLeftRightIcon, PresentationChartLineIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <section class="bg-gray-100 dark:bg-black py-16 px-6 lg:px-8">
    <div class="container mx-auto">
      <h2 class="text-4xl font-extrabold text-center text-blue-800 dark:text-blue-400 mb-12">Our Unique Approach</h2>
      <!-- Refined grid layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Card 1 (Large) -->
        <div class="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <div class="flex flex-col justify-between h-full">
            <div>
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 bg-blue-50 dark:bg-blue-900 rounded-2xl flex items-center justify-center text-blue-500 dark:text-blue-400 shrink-0">
                  <SparklesIcon class="w-14 h-14" aria-hidden="true"/>

                </div>
                
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Adaptive Curriculum
                </h3>

              </div>
              <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Our core philosophy. Your learning path adjusts to your pace, goals, and performance, ensuring maximum efficiency.
              </p>
            </div>
            <div class="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-lg mt-6 flex items-center justify-center text-gray-400">
              <span class="italic">Visual element placeholder</span>
            </div>
          </div>
        </div>
        
        <!-- Card 2 (Small) -->
        <div class="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div class="flex items-center gap-6">
              <div class="shrink-0 w-16 h-16 bg-red-50 dark:bg-red-900 rounded-2xl flex items-center justify-center text-[#b12c00] dark:text-red-400">
                <PuzzlePieceIcon class="w-10 h-10" aria-hidden="true"/>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">Engaging Exercises</h3>
                <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">Practice with real-world scenarios.</p>
              </div>
            </div>
        </div>

        <!-- Card 3 (Small) -->
        <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <div class="w-16 h-16 mb-4 bg-green-50 dark:bg-green-900 rounded-2xl flex items-center justify-center text-green-500 dark:text-green-400">
            <PresentationChartLineIcon class="w-10 h-10" aria-hidden="true"/>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Progress Tracking</h3>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">Monitor your improvements.</p>
        </div>

        <!-- Card 4 (Small) -->
        <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <div class="w-16 h-16 mb-4 bg-purple-50 dark:bg-purple-900 rounded-2xl flex items-center justify-center text-purple-500 dark:text-purple-400">
            <ChatBubbleLeftRightIcon class="w-10 h-10" aria-hidden="true"/>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Live Conversation</h3>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">Practice 1-on-1 with native speakers.</p>
        </div>

      </div>
    </div>
  </section>
</template>
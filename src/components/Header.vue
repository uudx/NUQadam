<script setup>
import { ref } from 'vue'
import { 
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover, 
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/20/solid'

import { 
  socialButtons, 
  instagramLink, 
  phoneNumbers 
} from '../data/socials.js'

const Pages = [
  {
    name: 'Home Page',
    path: '/'
  },
  {
    name: 'Our Teachers',
    path: '/teachers'
  },
]

const mobileMenuOpen = ref(false)

const copiedNumber = ref(null)

function copyToClipboard(numberToCopy) {
  navigator.clipboard.writeText(numberToCopy).then(() => {
    copiedNumber.value = numberToCopy
    setTimeout(() => {
      copiedNumber.value = null
    }, 2000)
  }).catch(err => {
    console.error('Failed to copy: ', err)
  })
}

</script>

<template>
  <header class="border-2 border-gray-100 bg-white dark:bg-gray-900 dark:border-white/5 z-50">
    <nav class="mx-auto flex max-w-7xl justify-between px-8 py-1.5 lg:px-8" aria-label="Global">
      <div class="flex items-center gap-x-12">
        <div class="flex items-center">
          <a href="#" class="-m-1 p-1 flex items-center gap-x-2">
            <span class="sr-only">Sally Academy</span>
            
            <img class="h-8 w-auto dark:hidden" src="../assets/logo.svg" alt="Sally Academy">
            
            <img class="h-8 w-auto hidden dark:block" src="../assets/logo_white.svg" alt="Sally Academy">
          </a>
        </div>
        
        <div class="hidden lg:flex justify-center gap-x-6 text-gray-900 dark:text-white">
          <router-link to="/" class="text-sm/6 font-semibold opacity-80 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-white/5 rounded-md px-3 py-2">Home Page</router-link>
          <router-link to="/teachers" class="text-sm/6 font-semibold opacity-80 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-white/5 rounded-md px-3 py-2">Our Teachers</router-link>
        </div>
      </div>
      
      <div class="flex flex-1 gap-x-12 flex-end justify-end lg:hidden">
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>

      <PopoverGroup class="hidden lg:flex">
        <Popover v-slot="{ open }" class="relative">
          <PopoverButton
            :class="open ? 'opacity-100' : 'opacity-80'"
            class="flex items-center gap-x-1 px-3 py-2 pr-1 rounded-md text-sm/6 font-semibold
                  hover:bg-gray-100 dark:hover:bg-white/5
                  text-black transition-opacity hover:opacity-100 
                  dark:text-white 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            <span class>Contact us</span>
            <ChevronDownIcon
              :class="open ? 'rotate-180' : ''"
              class="size-5 flex-none text-black/60 transition-transform duration-150 ease-in-out dark:text-white/60"
              aria-hidden="true"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <PopoverPanel 
              class="absolute right-0 z-50 mt-3 w-sm
                    overflow-hidden rounded-3xl bg-white 
                    shadow-lg outline-1 outline-gray-900/5 
                    dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
            >
              <div class="p-4 space-y-3">
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
                    <component :is="social.icon" class="size-5" aria-hidden="true" />
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
                  <component :is="instagramLink.icon" class="size-5" aria-hidden="true" />
                  <span>{{ instagramLink.name }}</span>
                </a>
              </div>

              <div class="border-t border-gray-200/50 p-4 dark:border-white/10">                
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
            </PopoverPanel>
          </transition>
        </Popover>
      </PopoverGroup>

      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50"></div>
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Sally Academy</span>
              <img class="h-14 w-auto dark:hidden" src="../assets/logo.svg" alt="SALLY ACADEMY">
              <img class="h-14 w-auto hidden dark:block" src="../assets/logo_white.svg" alt="SALLY ACADEMY">
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-white dark:divide-white/10">
              <div class="space-y-2 py-6">
                <Disclosure as="div" class="-mx-3" v-slot="{ open }" defaultOpen>
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 px-3 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5">
                    Pages
                    <ChevronDownIcon
                      :class="open ? 'rotate-180' : ''"
                      class="size-5 flex-none text-black/60 transition-transform duration-150 ease-in-out dark:text-white/60"
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <router-link
                      v-for="item in Pages"
                      :key="item.name"
                      :to="item.path"
                      @click="mobileMenuOpen = false"  class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-black/900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                    >
                      {{ item.name }}
                    </router-link>
                  </DisclosurePanel>
                </Disclosure>
                <div v-for="option in Contacts"
                  :key="option.name"
                  :href="option.href"
                  class="group relative flex items-center gap-x-3 rounded-lg">
                  
                  <div 
                    :style="{ backgroundColor: option.color }"
                    class="flex size-9 flex-none items-center justify-center rounded-lg"
                    >
                    <component :is="option.icon" class="size-6 text-white" aria-hidden="true" />
                  </div>
                  <div class="flex-auto">
                    <a 
                      :href="option.href" 
                      class="block font-semibold text-sm/7 text-gray-900 dark:text-white opacity-80 hover:opacity-100"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ option.name }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  </header>
</template>

<style scoped>
</style>
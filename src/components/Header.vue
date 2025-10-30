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
import WhatsappIcon from '../assets/whatsapp.svg?component'
import TelegramIcon from '../assets/telegram.svg?component'

const Contacts = [
  { 
    name: 'WhatsApp', 
    color: '#075E54',
    href: 'https://wa.me/777777',
    icon: WhatsappIcon
  },
  { 
    name: 'Telegram', 
    color: '#0088CC',
    href: 'https://t.me/7777777',
    icon: TelegramIcon
  },
]

const Pages = [
  {
    name: 'Home Page',
    href: '/'
  },
  {
    name: 'Our Tutors',
    href: '/'
  },
] 


const mobileMenuOpen = ref(false)

</script>

<template>
  <header class="bg-white dark:bg-gray-900">
    <nav class="mx-auto flex max-w-7xl items-center px-6 py-1.5 lg:px-8" aria-label="Global">
      
      <div class="flex items-center lg:flex-1">
        <a href="#" class="-m-1 p-1 flex items-center gap-x-2">
          <span class="sr-only">Sally Academy</span>
          
          <img class="h-14 w-auto dark:hidden" src="/logo.svg" alt="SALLY ACADEMY">
          
          <img class="h-14 w-auto hidden dark:block" src="/logo_white.svg" alt="SALLY ACADEMY">
        </a>
      </div>

      <div class="flex flex-1 gap-x-12 flex-end justify-end lg:hidden">
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      
      <div class="hidden lg:flex lg:flex-1 justify-center gap-x-12 text-gray-900 dark:text-white">
        <a href="#" class="text-sm/6 font-semibold opacity-80 hover:opacity-100">Home Page</a>
        <a href="#" class="text-sm/6 font-semibold opacity-80 hover:opacity-100">Our Tutors</a>
      </div>

      <PopoverGroup class="hidden lg:flex lg:flex-1 justify-end">
        <Popover v-slot="{ open }" class="relative">
          <PopoverButton
            :class="open ? 'opacity-100' : 'opacity-80'"
            class="flex items-center gap-x-1 rounded-md text-sm/6 font-semibold
                  text-black transition-opacity hover:opacity-100 
                  dark:text-white 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            <span>Contact us</span>
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
              class="absolute right-0 z-10 mt-3 w-sm
                    overflow-hidden rounded-3xl bg-white 
                    shadow-lg outline-1 outline-gray-900/5 
                    dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
            >
              <div class="p-4">
                <div 
                  v-for="option in Contacts" 
                  :key="option.name" 
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 dark:hover:bg-white/5">
                  <div 
                    :style="{ backgroundColor: option.color }"
                    class="flex size-11 flex-none items-center justify-center rounded-lg"
                  >
                    <component :is="option.icon" class="size-6 text-white" aria-hidden="true" />
                  </div>

                  <div class="flex-auto">
                    <a 
                      :href="option.href" 
                      class="block font-semibold text-gray-900 dark:text-white"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {{ option.name }}
                      <span class="absolute inset-0"></span>
                    </a>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </PopoverGroup>

      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50"></div>
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Sally Academy</span>
              <img class="h-14 w-auto dark:hidden" src="/logo.svg" alt="SALLY ACADEMY">
              <img class="h-14 w-auto hidden dark:block" src="/logo_white.svg" alt="SALLY ACADEMY">
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-white/10">
              <div class="space-y-2 py-6">
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 px-3 text-base/7 font-semibold text-white hover:text-white/5">
                    Pages
                    <ChevronDownIcon
                      :class="open ? 'rotate-180' : ''"
                      class="size-5 flex-none text-black/60 transition-transform duration-150 ease-in-out dark:text-white/60"
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <DisclosureButton  v-for="item in Pages" 
                      :key="item.name"
                      :href="item.href" 
                      class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white hover:bg-white/5">{{ item.name }}
                    </DisclosureButton>
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
                      class="block font-semibold text-sm/7 text-gray-900 dark:text-white"
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
<template>
  <Popover v-slot="{ open }" class="relative m-2">
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
        class="absolute right-0 z-10 mt-3 w-screen max-w-sm 
               overflow-hidden rounded-3xl bg-white 
               shadow-lg outline-1 outline-gray-900/5 
               dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
      >
        <div class="p-4">
          <div 
            v-for="option in contacts" 
            :key="option.name" 
            class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 dark:hover:bg-white/5"
          >
            <div 
              :style="{ backgroundColor: option.color }"
              class="flex size-11 flex-none items-center justify-center rounded-lg"
            >
              <component 
                :is="option.icon" 
                class="size-6 text-white" 
                aria-hidden="true" 
              />
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
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import WhatsappIcon from '../assets/whatsapp.svg?component'
import TelegramIcon from '../assets/telegram.svg?component'

const contacts = [
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
</script>
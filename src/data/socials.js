import WhatsappIcon from '../assets/icons/whatsapp.svg?component'
import TelegramIcon from '../assets/icons/telegram.svg?component'
import InstagramIcon from '../assets/icons/instagram.svg?component'

export const socialButtons = [
  { 
    name: 'WhatsApp', 
    href: 'https://wa.me/777777',
    icon: WhatsappIcon,
    class: 'bg-[#25D366] hover:bg-green-700'
  },
  { 
    name: 'Telegram', 
    href: 'https://t.me/7777777',
    icon: TelegramIcon,
    class: 'bg-[#2AABEE] hover:bg-blue-700'
  },
]

export const instagramLink = { 
  name: 'Follow on Instagram', 
  href: 'https://www.instagram.com/officialrickastley',
  icon: InstagramIcon,
  class: 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-80'
}

export const phoneNumbers = [
    {
        number: '+7 (700) 123-4567',
        value: '+77001234567'
    },
    {
        number: '+7 (701) 987-6543',
        value: '+77019876543'
    },
]
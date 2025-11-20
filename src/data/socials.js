import WhatsappIcon from '../assets/icons/whatsapp.svg?component'
import TelegramIcon from '../assets/icons/telegram.svg?component'
import InstagramIcon from '../assets/icons/instagram.svg?component'

export const socialButtons = [
  { 
    name: 'WhatsApp', 
    href: 'https://wa.me/+77071090830',
    icon: WhatsappIcon,
    class: 'bg-[#25D366] hover:bg-green-700'
  },
  { 
    name: 'Telegram', 
    href: 'https://t.me/ibragimdauren27',
    icon: TelegramIcon,
    class: 'bg-[#2AABEE] hover:bg-blue-700'
  },
]

export const instagramLink = { 
  name: 'Instagram-да бізге жазылыңыз', 
  href: 'https://www.instagram.com/Sally_Academy.kz/',
  icon: InstagramIcon,
  class: 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-80'
}

export const phoneNumbers = [
    {
        number: '+7 (707) 109-0830',
        value: '+77001234567'
    },
    {
        number: '+7 (776) 526-9076',
        value: '+77019876543'
    },
]
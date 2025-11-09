import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/pages/Home.vue'
import Teachers from '../components/pages/Teachers.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: Home
  },

  { 
    path: '/teachers',
    name: 'Teachers',
    component: Teachers
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
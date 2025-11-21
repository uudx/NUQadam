import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/pages/Home.vue')
  },
  {
    path: '/teachers',
    name: 'Teachers', 
    component: () => import('@/components/pages/Teachers.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/NUQadam/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0 }), 300)
    })
  }
})

export default router
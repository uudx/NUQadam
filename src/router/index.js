import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/pages/Home.vue')
  },
  {
    path: '/:id',
    name: 'TeacherDetails', 
    component: () => import('@/components/pages/TeacherDetails.vue'),
    props: true 
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router
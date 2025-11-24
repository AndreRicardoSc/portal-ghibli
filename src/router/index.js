import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('@/views/MovieView.vue')
    },
    {
      path: '/cast',
      name: 'castPage',
      component: () => import('@/views/CastView.vue')
    }
  ],
})

export default router

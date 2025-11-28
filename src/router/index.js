import { createRouter, createWebHistory } from 'vue-router'

const DefaultLayout = () => import('@/layouts/DefaultLayout.vue')
const WithOutFooter = () => import('@/layouts/WithOutFooter.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'movies',
          name: 'movies',
          component: () => import('@/views/MovieView.vue')
        },
        {
          path: 'cast',
          name: 'castPage',
          component: () => import('@/views/CastView.vue')
        }
      ]
    },

    {
      path: '/movies/:id',
      component: WithOutFooter,
      children: [
        {
          path: '',
          name: 'movieDetail',
          component: () => import('@/views/MovieDetail.vue'),
          props: true
        }
      ]
    },
    {
      path: '/cast/:id',
       component: WithOutFooter,
       children: [
         {
           path: '',
           name: 'castDetail',
           component: () => import('@/views/CastDetailView.vue'),
           props: true
         }
       ]
    }
  ]
})

export default router
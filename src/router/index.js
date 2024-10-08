import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tablazat',
      name: 'tablazat',
      component: () => import('../views/Tablazat.vue'),
    },
    {
      path: '/kepek',
      name: 'kepek',
      component: () => import('../views/Kepek.vue'),
    },
  ]
})

export default router

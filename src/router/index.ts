// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/',
    name: 'moons',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/',
    name: 'monsters',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/',
    name: 'items',
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

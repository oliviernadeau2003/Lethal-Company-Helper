// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/moons',
    name: 'moons',
    component: () => import('@/views/Moons.vue')
  },
  {
    path: '/monsters',
    name: 'monsters',
    component: () => import('@/views/Monsters.vue')
  },
  {
    path: '/items',
    name: 'items',
    component: () => import('@/views/Items.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

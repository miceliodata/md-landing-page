import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage,
  },
]

const router = createRouter({
  history: createWebHistory('/md-landing-page/'),
  routes,
})

export default router
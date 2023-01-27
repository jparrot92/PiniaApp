import { createRouter, createWebHistory } from 'vue-router'
import CounterOptionsPage from '@/counter/pages/CounterOptionsPage.vue'
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-options',
      component: CounterOptionsPage
    },
    {
      path: '/counter-setup',
      name: 'counter-setup',
      component: CounterSetupPage
    },
  ]
})

export default router

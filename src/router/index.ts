import { createRouter, createWebHistory } from 'vue-router'
import CounterOptionsPage from '@/counter/pages/CounterOptionsPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-options',
      component: CounterOptionsPage
    },
  ]
})

export default router

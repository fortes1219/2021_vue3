import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/provide',
    name: 'Provide',
    component: () => import('../views/Provide.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

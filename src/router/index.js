import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
  path: '/perfil',
    name: 'perfil',
    component: () => import('@/views/ProfileView.vue')
  },
  {
  path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashBoardView.vue')
  },
  {
  path: '/atividade',
    name: 'atividade',
    component: () => import('../views/PesquisarAtividade.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

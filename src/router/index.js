import { createRouter, createWebHistory } from 'vue-router'
import Contato from '@/views/Contato/Contato.vue'
import Home from '@/views/Home/Home.vue'
import Portfolio from '@/views/Portfolio/Portfolio.vue'
import Servicos from '@/views/Servicos/Servicos.vue'
import Sobre from '@/views/Sobre/Sobre.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/servicos',
    name: 'Servicos',
    component: Servicos
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

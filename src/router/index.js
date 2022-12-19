import { createRouter, createWebHistory } from 'vue-router'
import Conhecimentos from '@/views/Conhecimentos/Conhecimentos.vue'
import Contato from '@/views/Contato/Contato.vue'
import Home from '@/views/Home/Home.vue'
import Projetos from '@/views/Projetos/Projetos.vue'
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
    path: '/conhecimentos',
    name: 'Conhecimentos',
    component: Conhecimentos
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos
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

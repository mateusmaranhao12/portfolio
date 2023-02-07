import { createRouter, createWebHistory } from 'vue-router'
import Conhecimentos from '@/views/Conhecimentos/Conhecimentos.vue'
import Contato from '@/views/Contato/Contato.vue'
import Eletronica420 from '@/components/Eletronica420/Eletronica420.vue'
import EspacoLirio from '@/components/EspacoLirio/EspacoLirio.vue'
import Home from '@/views/Home/Home.vue'
import Maragogi from '@/components/Maragogi/Maragogi.vue'
import Projetos from '@/views/Projetos/Projetos.vue'
import Sobre from '@/views/Sobre/Sobre.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/sobre',
    component: Sobre
  },
  {
    path: '/conhecimentos',
    component: Conhecimentos
  },
  {
    path: '/projetos',
    component: Projetos,
    children: [
      { path: 'espaco-lirio', component: EspacoLirio },
      { path: 'eletronica420', component: Eletronica420 },
      { path: 'maragogi', component: Maragogi }
    ]
  },
  {
    path: '/Contato',
    component: Contato
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

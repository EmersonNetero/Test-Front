import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PesquisaView from '../views/PesquisaView.vue'
import ProdutoView from '@/views/ProdutoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:categoria',
    name: 'pesquisa',
    component: PesquisaView
  },
  {
    path: '/produto/:id',
    name: 'produto',
    component: ProdutoView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

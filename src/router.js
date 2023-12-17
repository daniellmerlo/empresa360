import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
import Dashboard from '@/components/dashboard/Dashboard.vue'
import DashboardRodape from '@/components/dashboard/DashboardRodape.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'
import Leads from '@/components/vendas/Leads.vue'
import Lead from '@/components/vendas/Lead.vue'
import Contratos from '@/components/vendas/Contratos.vue'
import Servico from '@/components/servicos/Servico.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Indicadores from '@/components/servicos/Indicadores.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'

const routes = [
  {
    path: '/', //localhost:5173/
    component: Site
  },
  {
    path: '/home', //localhost:5173/home
    component: Home,
    children: [
      {
        path: 'vendas',
        component: Vendas,
        children: [
          { name: 'leads', path: 'leads', component: Leads },
          { name: 'lead', path: 'lead/:id', component: Lead }, //feito com a aula anterior
          { name: 'contratos', path: 'contratos', component: Contratos },
          { name: 'vendaspadrao', path: '', component: VendasPadrao }
        ]
      },
      {
        name: 'servicos',
        path: 'servicos',
        component: Servicos,
        children: [
          {
            name: 'servico',
            path: ':id',
            components: {
              default: Servico,
              opcoes: Opcoes,
              indicadores: Indicadores
            }
          }
        ]
      },
      {
        name: 'dashboard',
        path: 'dashboard',
        components: { default: Dashboard, rodape: DashboardRodape }
      }
    ]
  },
  {
    path: '/login', //localhost:5173/login
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

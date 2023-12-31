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
import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue'

//Guardas de Rotas

const routes = [
  {
    name: 'raiz',
    path: '/', //localhost:5173/
    component: Site,
    meta: {
      requerAutorizacao: false
    }
  },
  {
    path: '/home', //localhost:5173/home
    meta: {
      requerAutorizacao: true
    },
    component: Home,
    alias: '/app',
    children: [
      {
        path: 'vendas',
        component: Vendas,
        children: [
          { name: 'leads', path: 'leads', component: Leads },
          {
            name: 'lead',
            props: true,
            /*
            props: {
              id: '5',
              outroParametro: 'teste_5'
            },
            props: route => {
              console.log('Rota ativa:', route)
              let teste = route.query.idioma ? route.query.idioma : route.params.outroParametro
              return {
                id: (parseInt(route.params.id) + 1).toString(),
                outroParametro: teste
              }
            },
            */
            path: 'lead/:id/:outroParametro',
            component: Lead,
            alias: ['/l/:id/:outroParametro', '/:id/:outroParametro', '/pessoa/:id/:outroParametro']
          }, //feito com a aula anterior
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
            props: {
              default: true,
              indicadores: true,
              opcoes: true
            },
            name: 'servico',
            alias: '/s/:id',
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
    component: Login,
    meta: {
      requerAutorizacao: false,
      campo2: 'teste',
      campo3: 50
    }
  },
  { path: '/redirecionamento-1', redirect: '/home/servicos' },
  { path: '/redirecionamento-2', redirect: { name: 'leads' } },
  { path: '/redirecionamento-3', redirect: '/home/vendas' },
  { path: '/redirecionamento-4', redirect: { name: 'vendaspadrao' } },
  {
    path: '/redirecionamento-5',
    redirect: (to) => {
      console.log(to)
      return { name: 'vendaspadrao' }
    }
  },
  //{ path: '/:catchAll(.*)*', redirect: '/' }
  { path: '/:catchAll(.*)*', component: PaginaNaoEncontrada }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(to => {
  if (to.meta.requerAutorizacao) {
    console.log('Validar o acesso')
  } else {
    console.log('Apenas seguir com a navegacao')
  }

})

export default router

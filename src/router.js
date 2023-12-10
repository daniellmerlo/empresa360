import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
import Vendas from '@/components/vendas/Vendas.vue'
import Servicos from '@/components/servicos/Servicos.vue'
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
            { path: 'vendas', component: Vendas },
            { path: 'servicos', component: Servicos }
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
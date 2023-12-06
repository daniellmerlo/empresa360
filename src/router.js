import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
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
    history: createWebHashHistory(),
    routes
})

const Vue = createApp(App)
Vue.use(router)
Vue.mount('#app')

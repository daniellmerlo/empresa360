//import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const Vue = createApp(App)
Vue.use(router)
Vue.mount('#app')

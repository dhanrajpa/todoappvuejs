import './assets/main.css'
import App from './App.vue'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './router'

const app = createApp(App)
app.use(createPinia()).mount('#app')
// app.config.devtools = true
// navigator.serviceWorker.register()

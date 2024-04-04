import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'

// Vercel analytics
import { inject } from '@vercel/analytics'

inject()

const app = createApp(App)

app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)
app.provide('today', new Date().toISOString().split('T')[0])
app.mount('#app')

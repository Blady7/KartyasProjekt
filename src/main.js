import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


//Bootstrap: css, js
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//Icons: css
import "bootstrap-icons/font/bootstrap-icons.min.css"

const app = createApp(App)

app.use(router)

app.mount('#app')

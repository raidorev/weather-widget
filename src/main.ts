import { createApp } from 'vue'

import App from './app.vue'
import { loadFonts } from './plugins/webfontloader'

import './assets/main.css'

void loadFonts()

createApp(App).mount('#app')

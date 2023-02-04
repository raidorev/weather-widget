import { createApp } from 'vue'
import App from './app.vue'

import './assets/main.css'
import { loadFonts } from './plugins/webfontloader'

void loadFonts()

createApp(App).mount('#app')

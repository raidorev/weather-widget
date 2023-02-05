import { defineCustomElement } from 'vue'

import WeatherWidget from './components/weather-widget.ce.vue'
import { loadFonts } from './plugins/webfontloader'

void loadFonts()

customElements.define('weather-widget', defineCustomElement(WeatherWidget))

import { defineCustomElement } from 'vue'
import WeatherWidged from './components/weather-widged.ce.vue'
import { loadFonts } from './plugins/webfontloader'

void loadFonts()

customElements.define('weather-widget', defineCustomElement(WeatherWidged))

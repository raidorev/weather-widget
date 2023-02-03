import { defineCustomElement } from 'vue'
import WeatherWidged from './components/weather-widged.ce.vue'

customElements.define('weather-widget', defineCustomElement(WeatherWidged))

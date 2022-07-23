import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'

createApp(App).use(store,axios).mount('#app')

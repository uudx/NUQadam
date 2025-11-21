import { createApp } from 'vue'
import './App.css'
import router from './router'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
const base = import.meta.env.BASE_URL


const app = createApp(App)

app.use(router)

app.use(VueLazyload, {
  loading: '${base}resources/loading.gif',
  error: '${base}resources/error.gif',
  attempt: 1
})

app.use(router).mount('#app')
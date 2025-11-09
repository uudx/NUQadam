import { createApp } from 'vue'
import './App.css'
import router from './router'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'


const app = createApp(App)

app.use(VueLazyload, {
  loading: '../src/components/resources/loading.gif',    // путь к плейсхолдеру
  error: '../src/components/resources/error.gif',        // путь к ошибке
  attempt: 1
})

app.use(router).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
const socket = io()

app.config.globalProperties.$socket = socket
app.config.globalProperties.ljm = 'ㅇㅇ'
createApp(App).use(store).use(router).mount('#app')

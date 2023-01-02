import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import login from './views/login.vue'
import chat from './views/chat.vue'

createApp(App).use(store).use(login).use(chat).use(router).mount('#app')

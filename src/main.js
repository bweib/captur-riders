import { createApp } from 'vue';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
createApp(App).use(router).use(store).mount('#app')

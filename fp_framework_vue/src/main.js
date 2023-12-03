import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../src/axios'

createApp(App).use(router).mount('#app');

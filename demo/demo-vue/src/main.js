import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import './style/mvsui.min.css';
import './style/demo.css';

createApp(App).use(router).mount('#app');

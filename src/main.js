import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importa o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importa o JavaScript do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../src/assets/main.css';
createApp(App).use(router).mount('#app');

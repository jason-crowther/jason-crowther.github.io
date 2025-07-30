import { createApp } from 'vue'
import App from '@/js/components/App.vue'

createApp(App).mount('#app')

/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js');
    });
  } */

import { createApp } from 'vue'
import App from '@/js/components/App.vue'

/* Event Bus*/
//window.Event = new createApp();

createApp(App).mount('#app')

/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js');
    });
  } */

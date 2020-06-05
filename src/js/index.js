import Vue from 'vue';
import App from './components/App.vue';

/* Event Bus*/
window.Event = new Vue();

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
});

/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js');
    });
  } */

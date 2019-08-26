import Vue from 'vue';

import App from './components/App.vue';

/*import "particles.js";
import projects from "./modules/projects";
import contact from "./modules/contact";

particlesJS.load('particles-js', './particlesjs-config.json');

projects();
contact();*/

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})

/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js');
    });
  } */

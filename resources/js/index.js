import "particles.js";

import projects from "./modules/projects";

particlesJS.load('particles-js', './particlesjs-config.json');

projects();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js');
    });
  } 
import projects from "./modules/projects";
import contact from "./modules/contact";
import "particles.js";

particlesJS.load('particles-js', './particlesjs-config.json');

projects();
contact();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js');
    });
  } 
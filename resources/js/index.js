import projects from "./modules/projects";
import "particles.js";

particlesJS.load('particles-js', './particlesjs-config.json');

projects();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js');
    });
  } 
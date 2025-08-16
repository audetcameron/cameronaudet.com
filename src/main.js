import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#my-app')

document.getElementById('skip-link').addEventListener('click', function(e) {
  e.preventDefault();
  var target = document.getElementById('body');
  target.setAttribute('tabindex', '-1');
  target.focus();
});
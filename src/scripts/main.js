// Import our custom CSS
import '../scss/styles.scss';
import './components/app-bar';
import './components/header-bar';
import './components/footer-bar';
import * as bootstrap from 'bootstrap';
import App from './views/app';
import pwShowHide from './utils/pwShowHide';

const app = new App({
  nav: document.querySelector('app-bar'),
  button: document.querySelector('#nav-toggle'),
  drawer: document.querySelector('.drawer'),
  wrapper: document.querySelector('.wrapper'),
  span: document.querySelectorAll('app-bar span'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  pwShowHide();
});

window.addEventListener('load', () => {
  app.renderPage();
  pwShowHide();
});

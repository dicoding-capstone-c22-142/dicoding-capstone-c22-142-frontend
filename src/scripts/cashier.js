import 'regenerator-runtime';
import './components/side-bar';
import './components/main-bar';
import * as bootstrap from 'bootstrap';
import '../scss/cashier-dashboard.scss';
import CashierApp from './views/cashierApp';
import swRegister from './utils/sw-register';

const cashierApp = new CashierApp({
  mainContent: document.querySelector('.main-content'),
  moreButton: document.querySelector('.more-button'),
  bodyOverlay: document.querySelector('.body-overlay'),
  sideBar: document.querySelector('#sidebar'),
  content: document.querySelector('#content'),
  sideBarCollapse: document.querySelector('#sidebarCollapse'),
});

window.addEventListener('hashchange', () => {
  cashierApp.renderPage();
});

window.addEventListener('load', () => {
  cashierApp.renderPage();
  swRegister();
});

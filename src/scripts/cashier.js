import './components/side-bar';
import './utils/pwShowHide';
import '../scss/styles.scss';

import CashierApp from './views/cashierApp';

const cashierApp = new CashierApp({
  sideBar: document.querySelector('side-bar'),
  toggle: document.querySelector('.toggle'),
  modeSwitch: document.querySelector('.mode'),
  modeText: document.querySelector('.mode-text'),
  content: document.querySelector('.content'),
});

window.addEventListener('hashchange', () => {
  cashierApp.renderPage();
});

window.addEventListener('load', () => {
  cashierApp.renderPage();
});

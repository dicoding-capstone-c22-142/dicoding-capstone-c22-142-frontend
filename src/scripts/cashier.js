import './components/side-bar';
import * as bootstrap from 'bootstrap';
import '../scss/cashier-dashboard.scss';
import CashierApp from './views/cashierApp';

const cashierApp = new CashierApp(document.querySelector('.main'));

window.addEventListener('hashchange', () => {
  cashierApp.renderPage();
});

window.addEventListener('load', () => {
  cashierApp.renderPage();
});

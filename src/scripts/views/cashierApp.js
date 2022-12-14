import cashierRoutes from '../routes/cashier/cashier-routes';
import CashierUrlParser from '../routes/cashier/url-cashier-parser';
import SideBarInitiator from '../utils/sideBar-initiator';
import 'js-loading-overlay';

class CashierApp {
  constructor({
    mainContent, moreButton, bodyOverlay, sideBar, content, sideBarCollapse,
  }) {
    this._mainContent = mainContent;
    this._moreButton = moreButton;
    this._bodyOverlay = bodyOverlay;
    this._sideBar = sideBar;
    this._content = content;
    this._sideBarCollapse = sideBarCollapse;
    this._initialCashierShell();
  }

  _initialCashierShell() {
    SideBarInitiator.init({
      sideBar: this._sideBar,
      content: this._content,
      bodyOverlay: this._bodyOverlay,
      moreButton: this._moreButton,
      sideBarCollapse: this._sideBarCollapse,
    });
  }

  async renderPage() {
    const url = CashierUrlParser.parseActiveUrlWithCombiner();
    const page = cashierRoutes[url];
    this._mainContent.innerHTML = await page.render();
    await page.afterRender();

    // media query for add-product button
    const widthOfscreen = window.matchMedia('(max-width: 992px)');
    const addButton = document.querySelector('#add-product');
    window.addEventListener('resize', () => {
      if (widthOfscreen.matches && this._sideBar.classList.contains('active')) {
        addButton.classList.remove('transform');
      } else if (!widthOfscreen.matches && this._sideBar.classList.contains('active')) {
        addButton.classList.add('transform');
      }
    });
  }
}

export default CashierApp;

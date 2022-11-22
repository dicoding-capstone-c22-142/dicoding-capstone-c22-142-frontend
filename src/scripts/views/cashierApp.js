import cashierRoutes from '../routes/cashier/cashier-routes';
import UrlParser from '../routes/url-parser';
import sideBarInitiator from '../utils/sidebar-initiator';

class CashierApp {
  constructor({
    sideBar, toggle, modeSwitch, modeText, content,
  }) {
    this._sideBar = sideBar;
    this._toggle = toggle;
    this._modeSwitch = modeSwitch;
    this._modeText = modeText;
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    sideBarInitiator.init({
      sideBar: this.sideBar,
      toggle: this._toggle,
      modeSwitch: this._modeSwitch,
      modeText: this._wrapper,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    console.log(url);
    const page = cashierRoutes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default CashierApp;

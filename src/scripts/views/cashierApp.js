import cashierRoutes from '../routes/cashier/cashier-routes';
import CashierUrlParser from '../routes/cashier/url-cashier-parser';
import sideBarCloseOpen from '../utils/sideBarOpenClose';

class CashierApp {
  constructor(content) {
    this._content = content;
  }

  async renderPage() {
    const url = CashierUrlParser.parseActiveUrlWithCombiner();
    const page = cashierRoutes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    sideBarCloseOpen();
  }
}

export default CashierApp;

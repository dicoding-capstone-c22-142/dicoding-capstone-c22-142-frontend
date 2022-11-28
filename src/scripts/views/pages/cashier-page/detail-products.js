import CashierApiSource from '../../../data/cashier-api-source';
import CashierUrlParser from '../../../routes/cashier/url-cashier-parser';
import { createDetailProduct } from '../../templates/cashier/cashier-template-creator';

const DetailProducts = {
  async render() {
    return `
    <div class="arrow-back">
      <a href="/kasir/#/manage"<i class="uil uil-arrow-left"></i></a>
    </div>
    <form class="product"></form>
    `;
  },

  async afterRender() {
    document.title = 'Detail Produk';
    document.querySelector('.navbar-brand').innerHTML = 'Kelola Produk';

    const url = CashierUrlParser.parseActiveUrlWithoutCombiner();
    const productWrapper = document.querySelector('.product');

    const product = await CashierApiSource.getProductById(url.id);
    productWrapper.innerHTML = createDetailProduct(product);
  },
};

export default DetailProducts;

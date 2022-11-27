import CashierApiSource from '../../../data/cashier-api-source';
import { createProductItemTemplate } from '../../templates/cashier/cashier-template-creator';

const Manage = {
  async render() {
    return `
    <div class="row mb-3">
      <div class="col">
        <div class="input-group ">
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" class="btn btn-outline-primary">search</button>
        </div>
      </div>
    </div>
    <div class="row bg-white product-list"></div>
    <div id="add-product">
      <a href="/kasir/#/manage/add"><i class="uil uil-plus"></i></a>
    </div>
    `;
  },

  async afterRender() {
    document.title = 'Manage';
    document.querySelector('.navbar-brand').innerHTML = 'Kelola Produk';
    const productList = document.querySelector('.product-list');
    const products = await CashierApiSource.getAllProducts();
    products.forEach((product) => {
      productList.innerHTML += createProductItemTemplate(product);
    });
  },
};

export default Manage;

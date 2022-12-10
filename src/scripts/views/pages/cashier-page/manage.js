import CashierApiSource from '../../../data/cashier-api-source';
import Search from '../../../utils/Search';
import sideBarActive from '../../../utils/sideBar-active';
import { createProductItemTemplate } from '../../templates/cashier/cashier-template-creator';

const Manage = {
  async render() {
    return `
    <div class="row mb-3">
      <div class="col">
        <div class="input-group rounded shadow-sm">
          <input type="search" class="form-control" id="search-product" placeholder="Cari nama kain" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" class="btn btn-outline-success" aria-label="search button">search</button>
        </div>
      </div>
    </div>
    <div class="row product-list"></div>
    <div id="add-product" class="shadow-lg">
      <a href="/kasir/#/manage/add" aria-label="add"><i class="uil uil-plus"></i></a>
    </div>
    `;
  },

  async afterRender() {
    document.title = 'Manage';
    document.querySelector('.navbar-brand').innerHTML = 'Kelola Produk';
    sideBarActive(document.querySelector('#sidebar li:nth-child(3)'));

    const productList = document.querySelector('.product-list');
    const products = await CashierApiSource.getAllProducts();
    const searchElement = document.querySelector('#search-product');

    document.querySelector('#sidebarCollapse').addEventListener('click', () => {
      const addButtonProduct = document.querySelector('#add-product');
      addButtonProduct.classList.toggle('transform');
    });

    products.forEach((product) => {
      productList.innerHTML += createProductItemTemplate(product, 'manage');
    });

    searchElement.addEventListener('keypress', async (event) => {
      if (event.key === 'Enter') {
        Search.products(searchElement.value);
      }
    });
  },
};

export default Manage;

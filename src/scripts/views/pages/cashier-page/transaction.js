import CashierApiSource from '../../../data/cashier-api-source';
import Search from '../../../utils/Search';
import sideBarActive from '../../../utils/sideBar-active';
import { createProductItemTemplate } from '../../templates/cashier/cashier-template-creator';

const Transaction = {
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
    <div class="row bg-white product-list"></div>
    `;
  },

  async afterRender() {
    document.title = 'Transaksi';
    document.querySelector('.navbar-brand').innerHTML = 'Transaksi';
    const sideBarListActive = document.querySelector('#sidebar li:nth-child(4)');
    sideBarActive(sideBarListActive);

    const productList = document.querySelector('.product-list');
    const products = await CashierApiSource.getAllProducts();
    const searchElement = document.querySelector('#search-product');
    const searchButton = document.querySelector('[aria-label="search button"]');

    products.filter((product) => product.outstock === false).forEach((product) => {
      productList.innerHTML += createProductItemTemplate(product, 'transaction');
    });

    searchElement.addEventListener('keypress', async (event) => {
      if (event.key === 'Enter') {
        Search.productAvailable(searchElement.value.trim());
      }
    });

    searchButton.addEventListener('click', async (event) => {
      Search.products(searchElement.value);
    });
  },
};

export default Transaction;

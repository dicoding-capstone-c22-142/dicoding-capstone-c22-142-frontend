import CashierApiSource from '../../../data/cashier-api-source';
import Search from '../../../utils/Search';
import sideBarActive from '../../../utils/sideBar-active';
import { createProductItemTemplate } from '../../templates/cashier/cashier-template-creator';

const Transaction = {
  async render() {
    return `
    <div class="row mb-3">
      <div class="col">
        <div class="input-group ">
          <input type="search" class="form-control rounded" id="search-product" placeholder="Cari barang atau kode" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" class="btn btn-outline-primary">search</button>
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
    products.forEach((product) => {
      productList.innerHTML += createProductItemTemplate(product, 'transaction');
    });

    const searchElement = document.querySelector('#search-product');
    searchElement.addEventListener('keypress', async (event) => {
      if (event.key === 'Enter') {
        Search.products(searchElement.value.trim());
      }
    });
  },
};

export default Transaction;

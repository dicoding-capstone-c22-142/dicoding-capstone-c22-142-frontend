import CashierApiSource from '../data/cashier-api-source';
import { createProductItemTemplate } from '../views/templates/cashier/cashier-template-creator';

const Search = {
  async products(query) {
    const productList = document.querySelector('.product-list');
    const result = await CashierApiSource.searchProduct(query);
    productList.innerHTML = '';
    result.forEach((product) => {
      productList.innerHTML += createProductItemTemplate(product, 'manage');
    });
  },
  async productAvailable(query) {
    const productList = document.querySelector('.product-list');
    const result = await CashierApiSource.searchProduct(query);
    productList.innerHTML = '';
    result.filter((item) => item.outstock === false).forEach((product) => {
      productList.innerHTML += createProductItemTemplate(product, 'manage');
    });
  },
};

export default Search;

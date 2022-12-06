import CashierApiSource from '../data/cashier-api-source';
import { createProductItemTemplate } from '../views/templates/cashier/cashier-template-creator';

const Search = {
  async products(query) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';
    const result = await CashierApiSource.searchProduct(query);
    result.forEach((product) => {
      productList.innerHTML += createProductItemTemplate(product, 'manage');
    });
  },
};

export default Search;

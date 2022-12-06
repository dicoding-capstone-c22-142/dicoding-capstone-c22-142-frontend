import { nanoid } from 'nanoid';
import CashierApiSource from '../../../data/cashier-api-source';
import CashierUrlParser from '../../../routes/cashier/url-cashier-parser';
import sideBarActive from '../../../utils/sideBar-active';
import { createAddTransactionTemplate, showModal } from '../../templates/cashier/cashier-template-creator';

const AddTransaction = {
  async render() {
    return `
    <div class="arrow-back">
        <a href="/kasir/#/transaction"<i class="uil uil-arrow-left"></i></a>
    </div>
    <form class="transaction-wrapper"></form>
    `;
  },

  async afterRender() {
    document.title = 'Transaksi';
    document.querySelector('.navbar-brand').innerHTML = 'Transaksi';

    sideBarActive(document.querySelector('#sidebar li:nth-child(4)'));

    const productWrapper = document.querySelector('.transaction-wrapper');
    const url = CashierUrlParser.parseActiveUrlWithoutCombiner();
    const product = await CashierApiSource.getProductById(url.id);
    productWrapper.innerHTML = await createAddTransactionTemplate(product);

    const addButton = document.querySelector('#add');
    let lengthOfProduct = document.querySelector('#lengthOfProduct');
    let price = document.querySelector('#price');
    let restOfProduct = document.querySelector('#restOfProduct');
    let total;

    restOfProduct = restOfProduct.value.split(' ');
    price = price.getAttribute('data-price-product');

    addButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (lengthOfProduct.value !== '') {
        if (parseInt(lengthOfProduct.value, 10) <= parseInt(restOfProduct[0], 10)) {
          const productName = product.product_name;
          const productType = product.product_type;
          total = price * lengthOfProduct.value;
          lengthOfProduct = lengthOfProduct.value;
          showModal({
            total, lengthOfProduct, productName, price, productType,
          });
        }
      }
    });
  },
};

export default AddTransaction;

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

    const data = await CashierApiSource.getProductById(url.id);
    productWrapper.innerHTML = await createDetailProduct(data);

    const productId = document.querySelector('#product-id');
    const productImage = document.querySelector('#formFile');
    const productName = document.querySelector('#product-name');
    const productModal = document.querySelector('#product-modal');
    const productType = document.querySelector('#product-type');
    const productPrice = document.querySelector('#product-price');
    const productStok = document.querySelector('#product-stock');
    const insertedAt = document.querySelector('#insertedAt');
    document.querySelector('#update').addEventListener('click', async (event) => {
      event.preventDefault();
      const product = {
        id: productId.value,
        productImage: productImage.value,
        productName: productName.value,
        productModal: productModal.value,
        productType: productType.value,
        productPrice: productPrice.value,
        productStok: productStok.value,
        insertedAt,
      };
      const response = await CashierApiSource.updateProduct(product);
      console.log(response);
    });
  },
};

export default DetailProducts;

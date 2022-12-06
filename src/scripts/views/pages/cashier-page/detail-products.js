import CashierApiSource from '../../../data/cashier-api-source';
import CashierUrlParser from '../../../routes/cashier/url-cashier-parser';
import sideBarActive from '../../../utils/sideBar-active';
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
    sideBarActive(document.querySelector('#sidebar li:nth-child(3)'));
    const productWrapper = document.querySelector('.product');
    const url = CashierUrlParser.parseActiveUrlWithoutCombiner();
    const data = await CashierApiSource.getProductById(url.id);
    productWrapper.innerHTML = await createDetailProduct(data);

    const productId = document.querySelector('#product-id');
    const productImage = document.querySelector('#formFile');
    const productName = document.querySelector('#product-name');
    const productLength = document.querySelector('#product-length');
    const productModal = document.querySelector('#capital');
    const productType = document.querySelector('#product-type');
    const productPrice = document.querySelector('#product-price');
    const productStok = document.querySelector('#product-stock');
    const insertedAt = document.querySelector('#insertedAt');
    let uploadImage = '';

    // preview image
    console.log(productImage);
    productImage.addEventListener('change', (e) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        uploadImage = reader.result;
        const imageContainer = document.querySelector('#display-image');
        imageContainer.innerHTML = `<img src="${uploadImage}">`;
      });
      reader.readAsDataURL(e.target.files[0]);
    });

    document.querySelector('#update').addEventListener('click', async (event) => {
      event.preventDefault();
      const product = {
        product_id: productId.value,
        product_image: productImage.getAttribute('src'),
        product_name: productName.value,
        product_length: productLength.value,
        capital: productModal.value,
        product_type: productType.value,
        product_price: productPrice.value,
        current_stock: productStok.value,
        insertedAt: insertedAt.value,
      };
      const response = await CashierApiSource.updateProduct(url.id, product);
      if (response.status === 'success') {
        alert(response.message);
        window.location = '/kasir/#/manage/product';
      }
    });

    document.querySelector('#delete').addEventListener('click', async (event) => {
      event.preventDefault();
      if (confirm('Apakah anda ingin menghapus?') === true) {
        const response = await CashierApiSource.deleteProduct(url.id);
        if (response.status === 'success') {
          alert(response.message);
          window.location = '/kasir/#/manage/product';
        }
      }
    });
  },
};

export default DetailProducts;

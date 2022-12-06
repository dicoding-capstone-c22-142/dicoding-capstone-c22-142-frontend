import { nanoid } from 'nanoid';
import CashierApiSource from '../../../data/cashier-api-source';
import sideBarActive from '../../../utils/sideBar-active';
import { createAddProductTemplate } from '../../templates/cashier/cashier-template-creator';

const AddProducts = {
  async render() {
    return '';
  },

  async afterRender() {
    document.title = 'Manage';
    document.querySelector('.navbar-brand').innerHTML = 'Kelola Produk';

    const sideBarListActive = document.querySelector('#sidebar li:nth-child(3)');
    sideBarActive(sideBarListActive);

    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = createAddProductTemplate();
    try {
      const productImage = document.querySelector('#formFile');
      const productName = document.querySelector('#product-name');
      const productModal = document.querySelector('#product-modal');
      const productType = document.querySelector('#product-type');
      const productPrice = document.querySelector('#product-price');
      const productStok = document.querySelector('#product-stock');
      const productLength = document.querySelector('#product-length');
      let uploadImage = '';

      // preview image
      productImage.addEventListener('change', (e) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          uploadImage = reader.result;
          const img = document.createElement('img');
          const imageContainer = document.querySelector('#display_image');
          img.setAttribute('src', uploadImage);
          imageContainer.appendChild(img);
        });
        reader.readAsDataURL(e.target.files[0]);
      });

      document.querySelector('#add').addEventListener('click', async (event) => {
        event.preventDefault();
        console.log(productImage.value);
        const product = {
          product_name: productName.value,
          product_image: productImage.value,
          product_price: productPrice.value,
          product_type: productType.value,
          visibilty: true,
          stock: productStok.value,
          capital: productModal.value,
          product_length: productLength.value,
          product_id: nanoid(10),
          insertedAt: new Date().toISOString(),
        };
        const response = await CashierApiSource.addProduct(product);
        console.log(response);
      });
    } catch (error) {
      console.error(error);
    }
  },
};

export default AddProducts;

import CashierApiSource from '../../../data/cashier-api-source';
import sideBarActive from '../../../utils/sideBar-active';
import uploadImage from '../../../utils/upload-image';
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
      let previewImage = '';

      // preview image
      productImage.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const imageContainer = document.querySelector('.display-image');
        try {
          const reader = new FileReader();
          reader.addEventListener('load', () => {
            previewImage = reader.result;
            imageContainer.innerHTML = `<img src="${previewImage}" class="card-img-top">`;
          });
          reader.readAsDataURL(file);
        } catch (error) {
          imageContainer.innerHTML = '';
        }

        document.querySelector('#add').addEventListener('click', (event) => {
          event.preventDefault();
          if (!file) return;

          uploadImage(file, async (imageUrl) => {
            const product = {
              product_name: productName.value,
              product_image: imageUrl,
              product_price: productPrice.value,
              product_type: productType.value,
              initital_stock: productStok.value,
              current_stock: productStok.value,
              capital: productModal.value,
              product_length: productLength.value,
            };
            const response = await CashierApiSource.addProduct(product);
            console.log(response);
          });
        });
      });
    } catch (error) {
      console.error(error);
    }
  },
};

export default AddProducts;

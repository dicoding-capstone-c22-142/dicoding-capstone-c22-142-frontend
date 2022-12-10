/* eslint-disable no-undef */
import Swal from 'sweetalert2';
import CashierApiSource from '../../../data/cashier-api-source';
import CashierUrlParser from '../../../routes/cashier/url-cashier-parser';
import deleteImage from '../../../utils/delete-image';
import sideBarActive from '../../../utils/sideBar-active';
import uploadImage from '../../../utils/upload-image';
import { createDetailProduct } from '../../templates/cashier/cashier-template-creator';

const DetailProducts = {
  async render() {
    return `
    <div class="arrow-back">
      <a href="/kasir/#/manage"><i class="fa-solid fa-left-long"></i> Kembali</a>
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
    productWrapper.innerHTML = createDetailProduct(data);

    const productInput = document.querySelector('#formFile');
    const productImage = document.querySelector('.display-image img');
    const productName = document.querySelector('#product-name');
    const productLength = document.querySelector('#product-length');
    const currentLength = document.querySelector('#current-length');
    const productModal = document.querySelector('#capital');
    const productType = document.querySelector('#product-type');
    const productPrice = document.querySelector('#product-price');
    const productStok = document.querySelector('#product-stock');
    let previewImage = '';

    // preview image
    productInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      const imageContainer = document.querySelector('.display-image');
      try {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          previewImage = reader.result;
          imageContainer.innerHTML = `<img src="${previewImage}">`;
        });
        reader.readAsDataURL(file);
      } catch (error) {
        imageContainer.innerHTML = '';
      }
    });
    document.querySelector('#update').addEventListener('click', async (event) => {
      event.preventDefault();
      JsLoadingOverlay.show();
      const product = {
        product_name: productName.value,
        product_image: '',
        product_price: parseInt(productPrice.value, 10),
        product_type: productType.value,
        initital_stock: parseInt(productStok.value, 10),
        current_stock: parseInt(productStok.value, 10),
        capital: parseInt(productModal.value, 10),
        product_length: parseFloat(productLength.value),
        current_length: parseFloat(currentLength.value),
      };
      if (!productInput.files[0]) {
        product.product_image = productImage.getAttribute('src');
        const response = await CashierApiSource.updateProduct(url.id, product);
        if (response.status === 'success') {
          JsLoadingOverlay.hide();
          Swal.fire(
            'Good job!',
            'Data berhasil diupdate',
            'success',
          );
        }
      } else {
        uploadImage(productInput.files[0], async (imageUrl) => {
          product.product_image = imageUrl;
          const response = await CashierApiSource.updateProduct(url.id, product);
          if (response.status === 'success') {
            JsLoadingOverlay.hide();
            Swal.fire(
              'Good job!',
              'Data berhasil diupdate',
              'success',
            );
          }
        });
      }
    });

    document.querySelector('#delete').addEventListener('click', (event) => {
      event.preventDefault();
      // sweetalert 2
      Swal.fire({
        title: 'Anda yakin ingin menghapus?',
        text: 'Produk yang di hapus tidak bisa kembali!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Hapus!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          JsLoadingOverlay.show();
          deleteImage(data.product_image, async () => {
            JsLoadingOverlay.hide();
            const response = await CashierApiSource.deleteProduct(url.id);
            Swal.fire(
              'Dihapus!',
              `${response.message}`,
              'success',
            );
            window.location = '/kasir/#/manage/product';
          });
        }
      });
    });
  },
};

export default DetailProducts;

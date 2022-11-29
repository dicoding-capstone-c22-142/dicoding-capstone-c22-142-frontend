import { nanoid } from 'nanoid';
import CashierApiSource from '../../../data/cashier-api-source';

const AddProducts = {
  async render() {
    return '';
  },

  async afterRender() {
    document.title = 'Manage';
    document.querySelector('.navbar-brand').innerHTML = 'Kelola Produk';
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="arrow-back">
          <a href="/kasir/#/manage"<i class="uil uil-arrow-left"></i></a>
        </div>
        <form class="product">
          <div class="row g-3">
            <div class="col-md-12">
              <label for="formFile" class="form-label">Foto Produk</label>
              <input class="form-control" type="file" id="formFile" accept="image/*" onchange="handleFiles(this.files)">
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" id="product-name" placeholder="Nama Produk">
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" id="product-modal" placeholder="Harga Modal">
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" id="product-type" placeholder="Tipe">
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" id="product-price" placeholder="Harga Jual Permeter">
            </div>
            <div class="col-md-6 mb-5">
              <input type="text" class="form-control" id="product-stock" placeholder="Jumlah Stok Pergulung">
            </div>
            <button type="submit" id="save" class="btn btn-primary">Simpan</button>
          </div>
        </form>
      `;
    const productImage = document.querySelector('#formFile');
    const productName = document.querySelector('#product-name');
    const productModal = document.querySelector('#product-modal');
    const productType = document.querySelector('#product-type');
    const productPrice = document.querySelector('#product-price');
    const productStok = document.querySelector('#product-stock');
    document.querySelector('#save').addEventListener('click', (event) => {
      event.preventDefault();
      const product = {
        id: nanoid(10),
        productImage: productImage.value,
        productName: productName.value,
        productModal: productModal.value,
        productType: productType.value,
        productPrice: productPrice.value,
        productStok: productStok.value,
        insertedAt: new Date().toISOString(),
      };
      const response = CashierApiSource.addProduct(product);
      console.log(response);
    });
  },
};

export default AddProducts;

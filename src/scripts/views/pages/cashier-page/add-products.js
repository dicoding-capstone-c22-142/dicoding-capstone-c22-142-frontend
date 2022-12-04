import { nanoid } from 'nanoid';
import CashierApiSource from '../../../data/cashier-api-source';
import sideBarActive from '../../../utils/sideBar-active';

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
    mainContent.innerHTML = `
        <div class="arrow-back">
          <a href="/kasir/#/manage"<i class="uil uil-arrow-left"></i></a>
        </div>
        <form class="product">
          <div class="row g-3">
            <div class="col-md-12">
              <label for="formFile" class="form-label">Foto Produk</label>
              <input class="form-control" type="file" id="formFile">
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" id="product-name" placeholder="Merk">
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" id="product-type" placeholder="Tipe">
            </div>
              <div class="col-md-6">
                <input type="text" class="form-control" id="product-stock" placeholder="Jumlah Stok Gulungan">
              </div>
            <div class="col-md-6">
              <input type="text" class="form-control" id="product-length" placeholder="Panjang Kain (m)">
              </div>
            <div class="col-md-6">
              <input type="text" class="form-control" id="product-modal" placeholder="Harga Beli Pergulung">
            </div>
            <div class="col-md-6 mb-3">
              <input type="text" class="form-control" id="product-price" placeholder="Harga Jual Permeter">
            </div>
            <button type="submit" id="add" class="btn btn-primary">Simpan</button>
          </div>
        </form>
      `;
    try {
      const productImage = document.querySelector('#formFile');
      const productName = document.querySelector('#product-name');
      const productModal = document.querySelector('#product-modal');
      const productType = document.querySelector('#product-type');
      const productPrice = document.querySelector('#product-price');
      const productStok = document.querySelector('#product-stock');
      const productLength = document.querySelector('#product-length');
      document.querySelector('#add').addEventListener('click', async (event) => {
        event.preventDefault();
        console.log(productImage.value);
        const product = {
          product_image: productImage.value,
          product_name: productName.value,
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

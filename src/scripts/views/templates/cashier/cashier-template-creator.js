import { Modal } from 'bootstrap';
import rupiahFormat from 'rupiah-format';
import CashierApiSource from '../../../data/cashier-api-source';

let modalWrap = null;

const showModalPaySuccess = (price, received, employee) => {
  if (modalWrap !== null) {
    modalWrap.remove();
  }
  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
        <div class="modal fade" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
              <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <p class="text-center fw-bold text-success fs-1"><i class="uil uil-check-circle "></i><p>
                    </div>
                    <div class="col-12">
                        <h3 class="text-center">Transaksi Berhasil</h3>
                        <p class="text-center">${new Date().toISOString()}</p>
                    </div>
                    <div class="col-6">
                        <p class="fs-6">Pembayaran</p>
                    </div>
                    <div class="col-6">
                        <p class="fs-6 fw-bold text-end">Tunai</p>
                    </div>
                    <div class="col-6">
                        <p class="fs-6">Total Tagihan</p>
                    </div>
                    <div class="col-6">
                        <p class="fs-6 fw-bold text-end">${rupiahFormat.convert(price)}</p>
                    </div>
                    <div class="col-6">
                        <p class="fs-6">Diterima</p>
                    </div>
                    <div class="col-6">
                        <p class="fs-6 fw-bold text-end">${rupiahFormat.convert(received)}</p>
                    </div>
                    <div class="col-6">
                        <p class="fs-6">Kembalian</p>
                    </div>
                    <div class="col-6">
                        <p class="fs-6 fw-bold text-end">${rupiahFormat.convert(received - price)}</p>
                    </div>
                    <div class="col-6">
                        <p class="fs-6">Nama Karyawan</p>
                    </div>
                    <div class="col-6">
                        <p class="fs-6 fw-bold text-end">${employee}</p>
                    </div>
                    <div class="col-6 mt-5">
                        <button type="button" class="btn btn-light w-100">Cetak Struk</button>
                    </div>
                    <div class="col-6 mt-5">
                        <button type="button" class="btn btn-light w-100">Kirim Struk</button>
                    </div>
                </div>
                <a class="btn btn-success mt-3 w-100" href="/kasir/#/transaction" id="new-transaction">Transaksi Baru</a>
              </div>
          </div>
        </div>
    `;

  document.body.append(modalWrap);
  const modal = new Modal(modalWrap.querySelector('.modal'));
  modal.show();
  document.querySelector('#new-transaction').addEventListener('click', () => {
    modal.hide();
  });
};

const showModal = (price, restOfProduct) => {
  if (modalWrap !== null) {
    modalWrap.remove();
  }
  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Total : ${rupiahFormat.convert(price)}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" autocomplete="off" id="employee" >
                <label for="employee">Karyawan yang mengurus</input>
            </div>
            <div class="form-floating">
                <input type="number" class="form-control" id="received" style="height: 200px; text-align: center; font-size: 4em">
                <label for="received">Uang Yang Diterima</label>
            </div>
            <button type="button" disabled id="pay" class="btn btn-success mt-5 w-100">Bayar</button>
        </div>
        </div>
    </div>
  </div>
  `;

  const received = modalWrap.querySelector('#received');
  const pay = modalWrap.querySelector('#pay');
  const employee = modalWrap.querySelector('#employee');
  document.body.append(modalWrap);
  const modal = new Modal(modalWrap.querySelector('.modal'));
  modal.show();

  received.addEventListener('input', () => {
    if (parseInt(received.value, 10) >= price) {
      pay.removeAttribute('disabled');
    } else {
      pay.setAttribute('disabled', '');
    }
  });
  pay.addEventListener('click', (event) => {
    modal.hide();
    showModalPaySuccess(price, received.value, employee.value);
    // on going
    // CashierApiSource.productPurchases();
    event.preventDefault();
  });
};

const createProductItemTemplate = (product, menu) => `
    <a href='/kasir/#/${menu}/product/${product.product_id}' class="border-bottom">
        <div class="col-12 d-flex align-items-center product-items">
            <img src="${product.product_image}" alt="Ka">
            <div class="name-price w-100">
                <p class="name">${product.product_name}</p>
                <p class="price">Rp ${product.capital}</p>
            </div>
            <div class="stok text-center ps-2 pe-2">
                <p>Stok</p>
                <p>${product.current_stock}</p>
            </div>
        </div>
    </a>
`;

const createDetailProduct = (product) => `
    <div class="row g-3">
        <div class="col-md-12">
            <img src="${product.product_image}" id="formFile">
        </div>
        <input value="${product.product_id}" hidden id="product-id">
        <input value="${product.insertedAt}" hidden id="insertedAt">
        <div class="col-md-12">
            <label for="formFile" class="form-label">Foto Produk</label>
            <input class="form-control" type="file" id="formFile" accept="image/*" onchange="handleFiles(this.files)">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control" id="product-name" placeholder="Nama Kain" value="${product.product_name}">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control" id="product-length" placeholder="Panjang Kain" value="${product.product_length}">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control" id="capital" placeholder="Harga Modal" value="${product.capital}">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control" id="product-type" placeholder="Tipe" value="${product.product_type}">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control" id="product-price" placeholder="Harga Jual Permeter" value="${product.product_price}">
        </div>
        <div class="col-md-6 mb-5">
            <input type="text" class="form-control" id="product-stock" placeholder="Jumlah Stok Pergulung" value="${product.current_stock}">
        </div>
        <button type="submit" class="btn btn-secondary" id="delete">Hapus Produk</button>
        <button type="submit" class="btn btn-success" id="update">Simpan</button>
    </div>
`;

const createAddTransactionTemplate = (product) => `
    <div class="row g-3">
        <div class="col-md-12">
            <img src="${product.product_image}" alt="product image">
        </div>
        <div class="col-md-12">
            <h3 class="text-center">${product.product_name}</h3>
        </div>
        <div class="col-md-6">
            <div class="form-floating">
                <input type="text"  class="form-control" id="price" data-price-product="${product.product_price}" value="${rupiahFormat.convert(product.product_price)}">
                <label for="floatingEmptyPlaintextInput">Harga Permeter</label>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating">
                <input type="text"  class="form-control" id="restOfProduct" value="${product.product_length} meter">
                <label for="floatingEmptyPlaintextInput">Panjang Kain Tersisa</label>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-floating">
                <input type="number" class="form-control" required autofocus id="lengthOfProduct" max="${product.product_length}" min="0" style="height: 200px; text-align: center; font-size: 4em">
                <label for="floatingEmptyPlaintextInput">Panjang Kain yang dipesan</label>
            </div>
        </div>
        <button type="submit" id="add" class="btn btn-primary">Simpan</button>
    </div>
`;

const createReport = () => `
    <div class="col-md-12">
    <div class="table-responsive">
        <table class="table table-hover">
            <thead class="text-primary">
                <tr>
                    <th>Tanggal</th>
                    <th>Barang</th>
                    <th>Harga</th>
                    <th>Jumlah</th>
                    <th>Tagihan</th>
                    <th>Karyawan</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>26/07/2022</td>
                    <td>Kain</td>
                    <td>Rp 25.000,00</td>
                    <td>2 meter</td>
                    <td>Rp 50.000,00</td>
                    <td>Reza</td>
                </tr>
                <tr>
                    <td>26/07/2022</td>
                    <td>Kain</td>
                    <td>Rp 25.000,00</td>
                    <td>2 meter</td>
                    <td>Rp 50.000,00</td>
                    <td>Reza</td>
                </tr>
                <tr>
                    <td>26/07/2022</td>
                    <td>Kain</td>
                    <td>Rp 25.000,00</td>
                    <td>2 meter</td>
                    <td>Rp 50.000,00</td>
                    <td>Reza</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
`;

const createProfileTemplate = () => `
    <div class="img-profile mb-3">
        <img src="/icons/profile.jpg" width="200" height="200">
    </div>
    <div class="col-12 mb-3">
        <div class="form-floating mb-3">
            <input type="text"  class="form-control" id="name" value="MulyaTex Sigli">
            <label for="name">Nama Owner</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text"  class="form-control" id="username" value="Mursalin">
            <label for="username">Nama Usaha</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email"  class="form-control" id="email" placeholder="name@example.com" value="name@example.com">
            <label for="email">Email</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text"  class="form-control" id="phone" value="081292008576">
            <label for="phone">No. Telepon</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text"  class="form-control" id="city" value="Sigli">
            <label for="city">Kota</label>
        </div>
    </div>
    <div class="col-12 mb-5">
        <button class="btn btn-primary logout">Logout</button>
    </div>
`;

const createSettingsTemplate = () => `
    <div class="img-profile mb-3">
        <img src="/icons/profile.jpg" width="200" height="200">
    </div>
    <div class="col-12 mb-3">
        <div class="form-floating mb-3">
            <input type="text"  class="form-control" id="name" value="MulyaTex Sigli">
            <label for="name">Nama Owner</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text"  class="form-control" id="username" value="Mursalin">
            <label for="username">Nama Usaha</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email"  class="form-control" id="email" placeholder="name@example.com" value="name@example.com">
            <label for="email">Email</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text"  class="form-control" id="phone" value="081292008576">
            <label for="phone">No. Telepon</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text"  class="form-control" id="city" value="Sigli">
            <label for="city">Kota</label>
        </div>
    </div>
    <div class="col-12 mb-5">
        <button class="btn btn-success update">Simpan</button>
    </div>
`;

export {
  createProductItemTemplate,
  createDetailProduct,
  createAddTransactionTemplate,
  createReport,
  showModal,
  createProfileTemplate,
  createSettingsTemplate,
};

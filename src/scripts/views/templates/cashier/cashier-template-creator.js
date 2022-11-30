import { Modal } from 'bootstrap';
import rupiahFormat from 'rupiah-format';

let modalWrap = null;

const showModalPaySuccess = (price, received) => {
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
                        <p class="fs-6 fw-bold text-end">Rp ${price}</p>
                    </div>
                    <div class="col-6">
                        <p class="fs-6">Diterima</p>
                    </div>
                    <div class="col-6">
                        <p class="fs-6 fw-bold text-end">Rp ${received}</p>
                    </div>
                    <div class="col-6">
                        <p class="fs-6">Kembalian</p>
                    </div>
                    <div class="col-6">
                        <p class="fs-6 fw-bold text-end">Rp ${received - price}</p>
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
            <div class="form-floating">
                <input type="number" class="form-control" autofocus id="received" style="height: 200px; text-align: center; font-size: 4em">
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
    showModalPaySuccess(price, received.value);
    event.preventDefault();
  });
};

const createProductItemTemplate = (product, menu) => `
    <a href='/kasir/#/${menu}/product/${product.product_id}' class="border-bottom">
        <div class="col-12 d-flex align-items-center product-items">
            <img src="${product.product_image}" alt="Ka">
            <div class="name-price w-100">
                <p class="name">${product.product_name}</p>
                <p class="price">Rp ${product.product_price}</p>
            </div>
            <div class="stok text-center ps-2 pe-2">
                <p>Stok</p>
                <p>${product.stock}</p>
            </div>
        </div>
    </a>
`;

const createDetailProduct = (product) => `
    <div class="row g-3">
        <div class="col-md-12">
            <img src="${product.product_image}">
        </div>
        <input value="${product.product_id}" hidden id="product-id">
        <input value="${product.insertedAt}" hidden id="insertedAt">
        <div class="col-md-12">
            <label for="formFile" class="form-label">Foto Produk</label>
            <input class="form-control" type="file" id="formFile" accept="image/*" onchange="handleFiles(this.files)">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Nama Produk" value="${product.product_name}">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Harga Modal" value="${product.capital}">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Tipe" value="${product.product_type}">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Harga Jual Permeter" value="${product.product_price}">
        </div>
        <div class="col-md-6 mb-5">
            <input type="text" class="form-control" placeholder="Jumlah Stok Pergulung" value="${product.stock}">
        </div>
        <button type="submit" class="btn btn-secondary" id="delete">Hapus Produk</button>
        <button type="submit" class="btn btn-success" id="update">Simpan</button>
    </div>
`;

const createAddTransactionTemplate = (product) => `
    <div class="row g-3">
        <div class="col-md-12">
            <img src="https://i.pinimg.com/236x/38/cd/10/38cd1008186f0629345d15c389d52768.jpg" alt="product image">
        </div>
        <div class="col-md-12">
            <h3 class="text-center">Product Name</h3>
        </div>
        <div class="col-md-6">
            <div class="form-floating">
                <input type="text" readonly class="form-control" id="price" data-price-product="25000" value="${rupiahFormat.convert(25000)}">
                <label for="floatingEmptyPlaintextInput">Harga Permeter</label>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating">
                <input type="text" readonly class="form-control" id="restOfProduct" value="250 meter">
                <label for="floatingEmptyPlaintextInput">Panjang Kain Tersisa</label>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-floating">
                <input type="number" class="form-control" required autofocus id="lengthOfProduct" max="250" min="0" style="height: 200px; text-align: center; font-size: 4em">
                <label for="floatingEmptyPlaintextInput">Panjang Kain yang dipesan</label>
            </div>
        </div>
        <button type="submit" id="add" class="btn btn-primary">Simpan</button>
    </div>
`;

export {
  createProductItemTemplate,
  createDetailProduct,
  createAddTransactionTemplate,
  showModal,
};

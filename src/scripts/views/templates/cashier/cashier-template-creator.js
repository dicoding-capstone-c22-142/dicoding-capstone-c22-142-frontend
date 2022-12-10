import { Modal } from 'bootstrap';
import rupiahFormat from 'rupiah-format';
import convertIsoDateToDate from '../../../utils/convertIsoDate';
import transactionProcess from '../../../utils/transaction-process';

let modalWrap = null;

const showModalPaySuccess = (idProduct, price, received, employee) => {
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
                        <p class="text-center">${convertIsoDateToDate(new Date().toISOString())}</p>
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
                        <a href="/kasir/#/report/transaction/${idProduct}" class="btn btn-light w-100" >Cetak Struk</a>
                    </div>
                    <div class="col-6 mt-5">
                        <button type="button" class="btn btn-light w-100" aria-label="kirim struk">Kirim Struk</button>
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

const showModal = ({
  idProduct, total, length, productName, price, productType,
}) => {
  if (modalWrap !== null) {
    modalWrap.remove();
  }
  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Total : ${rupiahFormat.convert(total)}</h5>
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
            <button type="button" disabled id="pay" class="btn btn-success mt-5 w-100" aria-label="pay">Bayar</button>
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
    if (parseInt(received.value, 10) >= total) {
      pay.removeAttribute('disabled');
    } else {
      pay.setAttribute('disabled', '');
    }
  });

  pay.addEventListener('click', async (event) => {
    transactionProcess({
      productName, productType, price, total, employee, received, length,
    });

    modal.hide();
    showModalPaySuccess(idProduct, total, received.value, employee.value);
    event.preventDefault();
  });
};

const createProductItemTemplate = (product, menu) => `
    <div class="col-6 col-sm-4 col-lg-3">
        <a href='/kasir/#/${menu}/product/${product.product_id}' aria-label="product" class="border-bottom">
            <div class="card shadow-sm mb-3">
                <img src="${product.product_image}" class="card-img-top" alt="product image">
                <div class="card-body">
                    <p class="name card-title fw-semibold col-6">${product.product_name}</p>
                    <p class="price fw-bold">${rupiahFormat.convert(product.product_price)}/m</p>
                    <p class="stock">Sisa ${product.current_length} meter</p>
                </div>
            </div>
        </a>
    </div>
`;

const createDetailProduct = (product) => `
    <div class="row g-3">
        <div class="col-md-12">
            <div class="card" style="margin: auto; display:block;">
                <div class="display-image">
                    <img src="${product.product_image}" alt="product image">
                </div>
                <div class="card-body">
                    <input class="form-control" type="file" accept="image/*" id="formFile">
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating">
                <input type="text" class="form-control" id="product-name" value="${product.product_name}">
                <label for="product-name">Nama Kain</label>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating">
                <input type="text" class="form-control" id="product-type"value="${product.product_type}">
                <label for="product_type">Jenis Kain</label>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating">
                <input type="text" class="form-control" id="product-length" value="${product.product_length}">
                <label for="product-length">Panjang Kain </label>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating">
                <input type="text" class="form-control" id="current-length" value="${product.current_length}">
                <label for="current-length">Sisa Kain </label>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating">
                <input type="text" class="form-control" id="capital" value="${product.capital}">
                <label for="capital">Harga Modal</label>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating">
                <input type="text" class="form-control" id="product-price" value="${product.product_price}">
                <label for="product_price">Harga Jual Permeter</label>
            </div>
        </div>
        <div class="col-md-6 mb-5">
            <div class="form-floating">
                <input type="text" class="form-control" id="product-stock" min="0" value="${product.current_stock}">
                <label for="product_stock">Jumlah Stok Pergulung</label>
            </div>
        </div>
    </div>
    <div class="d-grid gap-2 col-6 mx-auto">
        <button type="submit" class="btn btn-primary" id="update" aria-label="save">Simpan</button>
        <button type="submit" class="btn" id="delete" aria-label="delete">Hapus Produk</button>
    </div>
`;

const createAddTransactionTemplate = (product) => `
    <div class="row g-3 mb-5">
    <h3 class="text-center">${product.product_name}</h3>
        <div class="col-sm-6 d-flex">
            <div class="display-image">
                <img src="${product.product_image}" alt="product image">
            </div>
        </div>
        <div class="col-sm-6">
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="form-floating">
                        <input type="text"  class="form-control" readonly id="price" data-price-product="${product.product_price}" value="${rupiahFormat.convert(product.product_price)}">
                        <label for="floatingEmptyPlaintextInput">Harga Permeter</label>
                    </div> 
                </div>
                <div class="col-md-6">
                    <div class="form-floating">
                        <input type="text"  class="form-control" readonly id="restOfProduct" value="${product.current_length} meter">
                        <label for="floatingEmptyPlaintextInput">Panjang Kain Tersisa</label>
                    </div>
                </div>
                <div class="form-floating">
                    <input type="number" class="form-control" required autofocus id="lengthOfProduct" max="${product.current_length}" min="0" style="height: 200px; text-align: center; font-size: 4em">
                    <label for="floatingEmptyPlaintextInput">Panjang Kain yang dipesan</label>
                </div>
                <button type="submit" id="add" class="btn btn-primary"o aria-label="continue">Lanjutkan</button>
            </div>            
        </div>
    </div>
`;

const createReport = (reports) => {
  const tBody = document.querySelector('tbody');
  tBody.innerHTML = '';
  reports.forEach((report) => {
    const date = convertIsoDateToDate(report.insertedAt);
    tBody.innerHTML += `
        <tr id="${report.transaction_id}">
            <td>${date}</td>
            <td>${report.product_name}</td>
            <td>${report.author}</td>
        </tr>
    `;
  });
};

const createProfileTemplate = () => `
    <div class="img-profile mb-3">
        <img src="/icons/profile.jpg" width="200" height="200">
    </div>
    <div class="col-12 mb-3">
        <div class="form-floating mb-3">
            <input type="text" readonly class="form-control" id="name" value="MulyaTex Sigli">
            <label for="name">Nama Owner</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" readonly class="form-control" id="username" value="Mursalin">
            <label for="username">Nama Usaha</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" readonly class="form-control" id="email" placeholder="name@example.com" value="mursalin@cashtex.site">
            <label for="email">Email</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" readonly class="form-control" id="phone" value="08129363643">
            <label for="phone">No. Telepon</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" readonly class="form-control" id="city" value="Sigli">
            <label for="city">Kota</label>
        </div>
    </div>
    <div class="col-12 mb-5">
        <button class="btn btn-primary logout" aria-label="logout">Logout</button>
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
        <button class="btn btn-success update" disabled aria-label="save">Simpan</button>
    </div>
`;

const createAddProductTemplate = () => `
<div class="arrow-back">
    <a href="/kasir/#/manage"><i class="uil uil-arrow-left"></i> Kembali</a>
</div>
<form class="product">
  <div class="row g-3">
    <div class="col-md-12">
        <div class="card" style="margin: auto; display: block;">
            <div class="display-image">
            </div>
            <div class="card-body">
                <input class="form-control" type="file" accept="image/*" id="formFile" required>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="product-name" placeholder="Merk" required>
    </div>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="product-type" placeholder="Tipe" required>
    </div>
      <div class="col-sm-6">
        <input type="text" class="form-control" id="product-stock" placeholder="Jumlah Stok Gulungan" required>
      </div>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="product-length" placeholder="Panjang Kain (m)" required>
      </div>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="product-modal" placeholder="Harga Beli Pergulung" required>
    </div>
    <div class="col-sm-6 mb-3">
      <input type="text" class="form-control" id="product-price" placeholder="Harga Jual Permeter" required>
    </div>
    <button type="submit" id="add" class="btn btn-primary" aria-label="save">Simpan</button>
  </div>
</form>
`;

const createDetailReportTemplate = (transaction) => `
    <div class="row">
        <div class="col-md-12 mb-3">
            <h3 class="text-center text-dark">CASHTEX</h3>
            <p class="text-center">CAPSTONE | C22-142 | SIB-3 DICODING</P>
        </div>
        <hr>
        <div class="col-sm-12">
            <table style="width: 100%">
                <tr>
                    <td>Tanggal</td>
                    <td>:</td>
                    <td class="ps-3">${convertIsoDateToDate(transaction.insertedAt)}</td>
                </tr>
                <tr>
                    <td>ID Transaksi</td>
                    <td>:</td>
                    <td class="ps-3">${transaction.transaction_id}</td>
                </tr>
                <tr>
                    <td>Staff</td>
                    <td>:</td>
                    <td class="ps-3">${transaction.author}</td>
                </tr>
            </table>
        </div>
        <hr>
        <div class="col-sm-12">
            <table style="width: 100%; margin: auto">
                <tr>
                    <td colspan="2" class="text-center pt-2 fw-bold">${transaction.product_name} ${transaction.product_type}</td>
                </tr>
                <tr>
                    <td colspan="2" class="text-center">${rupiahFormat.convert(transaction.product_price)}/meter</td>
                    <td>x${transaction.amount}</td>
                    <td class="ps-5">${rupiahFormat.convert(transaction.total_bill)}</td>
                </tr>
            </table>
        </div>
        <hr>
        <div class="col-sm-12 ms-auto">
            <table style="width: 100%">
                <tr>
                    <td class="text-end pe-3">Total Transaksi</td>
                    <td>:</td>
                    <td class="text-end">${rupiahFormat.convert(transaction.total_bill)}</td>
                </tr>
                <tr>
                    <td class="text-end pe-3">Cash</td>
                    <td>:</td>
                    <td class="text-end">${rupiahFormat.convert(transaction.received)}</td>
                </tr>
                <tr>
                    <td class="text-end pe-3">Kembali</td>
                    <td>:</td>
                    <td class="text-end">${rupiahFormat.convert(transaction.change)}</td>
                </tr>
            </table>
        </div>
        <hr>
        <p class="text-center p-3 mb-5">Terimakasih</p>
    </div>
`;

const createDashboardTemplate = ({
  transactionLength, income, todayTransactionLength, todayIncome,
}) => `
<div class="row">
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats mt-3">
            <div class="card-content">
                <p class="category"><strong>Total Transactions</strong></p>
                <h3 class="card-title">${transactionLength}</h3>
            </div>
            <div class="card-footer">
                <div class="stats">
                    <i class="uil uil-info-circle text-info"></i>
                    <a href="/kasir/#/report" class="text-info">See detailed report</a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats mt-3">
            <div class="card-content">
                <p class="category"><strong>Income</strong></p>
                <h3 class="card-title">${rupiahFormat.convert(income)}</h3>
            </div>
            <div class="card-footer">
                <div class="stats">
                    Total Income
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats mt-3">
            <div class="card-content">
                <p class="category"><strong>Transactions</strong></p>
                <h3 class="card-title">${todayTransactionLength}</h3>
            </div>
            <div class="card-footer">
                <div class="stats">
                    Transactions Today
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats mt-3">
            <div class="card-content">
                <p class="category"><strong>Income</strong></p>
                <h3 class="card-title">${rupiahFormat.convert(todayIncome)}</h3>
            </div>
            <div class="card-footer">
                <div class="stats">
                    Income Today
                </div>
            </div>
        </div>
    </div>
</div>


<div class="row mt-3">
    <div class="col-md-12">
        <div class="card" style="min-height: 485px">
            <div class="card-header card-header-text">
                <h4 class="card-title">Transaksi Hari ini</h4>
                <p class="category">Transaksi tanggal ${convertIsoDateToDate(new Date().toISOString())} pukul <span class="time"></span> WIB</p>
            </div>
            <div class="card-content table-responsive">
                <table class="table table-hover">
                    <thead class="table-light">
                        <tr>
                            <th class="fw-bold">Nama Kain</th>
                            <th class="fw-bold">Total Harga</th>
                            <th class="fw-bold">Karyawan</th>
                        </tr>
                    </thead>
                    <tbody id="table-transaction"></tbody>
                </table>
            </div>
        </div>
    </div>
</div>
`;

const createDashboardTableTransactionTemplate = (transaction) => `
    <tr id="${transaction.transaction_id}">
        <td>${transaction.product_name}</td>
        <td>${rupiahFormat.convert(transaction.total_bill)}</td>
        <td>${transaction.author}</td>
    </tr>
`;

export {
  createProductItemTemplate,
  createDetailProduct,
  createAddTransactionTemplate,
  createReport,
  showModal,
  createProfileTemplate,
  createSettingsTemplate,
  createAddProductTemplate,
  createDetailReportTemplate,
  createDashboardTemplate,
  createDashboardTableTransactionTemplate,
};

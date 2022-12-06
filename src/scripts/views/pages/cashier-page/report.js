import CashierApiSource from '../../../data/cashier-api-source';
import sideBarActive from '../../../utils/sideBar-active';
import { createReport } from '../../templates/cashier/cashier-template-creator';

const Report = {
  async render() {
    return `
    <div class="row mt-2">
      <div class="col-6">
        <input type="date" style="width: 100%; padding: 5px; border-radius: 5px"/>
      </div>
      <div class="col-6">
        <input type="date" style="width: 100%; padding: 5px; border-radius: 5px"/>
      </div>
    </div>
    <div class="bg-white report mt-3 p-2">
      <div class="table-responsive">
        <table class="table table-hover">
            <thead class="text-primary">
                <tr>
                    <th>Tanggal</th>
                    <th>Nama Kain</th>
                    <th>Tagihan</th>
                    <th>Karyawan</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
      </div>
    </div>
    `;
  },

  async afterRender() {
    document.title = 'Laporan';
    document.querySelector('.navbar-brand').innerHTML = 'Laporan';
    const sideBarListActive = document.querySelector('#sidebar li:nth-child(5)');
    sideBarActive(sideBarListActive);

    const reports = await CashierApiSource.getAllTransactions();
    createReport(reports);

    const tableRow = document.querySelectorAll('tr');

    tableRow.forEach((tr) => {
      tr.addEventListener('click', (element) => {
        const id = element.path[1].getAttribute('id');
        console.log(id);
        window.location = `/kasir/#/report/transaction/${id}`;
      });
    });
  },
};

export default Report;

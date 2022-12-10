import CashierApiSource from '../../../data/cashier-api-source';
import convertIsoDateToDate from '../../../utils/convertIsoDate';
import sideBarActive from '../../../utils/sideBar-active';
import tableRowClick from '../../../utils/tableRowClick';
import { createReport } from '../../templates/cashier/cashier-template-creator';

const Report = {
  async render() {
    return `
    <div class="row g-3">
      <div class="col-md-5">
        <label for="start" class="form-label">Mulai</label>
        <input type="date" id="start" class="form-control"/>
      </div>
      <div class="col-md-5">
        <label for="end" class="form-label">Akhir</label>
        <input type="date" id="end" class="form-control"/>
      </div>
      <div class="col-md-2">
        <label class="form-label"></label>
        <button class="btn btn-primary form-control" id="filter" aria-label="filter date">Filter</button>
      </div>
    </div>
    <div class="bg-white report mt-4">
      <div class="table-responsive">
        <table class="table table-hover">
            <thead class="table-light">
                <tr>
                    <th scope="col" class="fw-bold">Tanggal</th>
                    <th scope="col" class="fw-bold">Nama Kain</th>
                    <th scope="col" class="fw-bold">Karyawan</th>
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
    reports.sort((a, b) => new Date(b.insertedAt) - new Date(a.insertedAt));
    createReport(reports);

    let tableRow = document.querySelectorAll('tbody tr');

    const start = document.querySelector('#start');
    const end = document.querySelector('#end');
    let startDate = '';
    let endDate = '';
    start.addEventListener('change', (e) => {
      startDate = new Date(e.target.value).toISOString();
    });
    end.addEventListener('change', (e) => {
      endDate = new Date(e.target.value).toISOString();
    });

    document.querySelector('#filter').addEventListener('click', (e) => {
      e.preventDefault();
      if (startDate && endDate) {
        startDate = convertIsoDateToDate(startDate);
        endDate = convertIsoDateToDate(endDate);
        const datas = reports.filter((item) => convertIsoDateToDate(item.insertedAt) >= startDate
         && convertIsoDateToDate(item.insertedAt) <= endDate);
        createReport(datas);
        tableRow = document.querySelectorAll('tbody tr');
        tableRowClick(tableRow);
      }
    });
    tableRowClick(tableRow);
  },
};

export default Report;

import CashierApiSource from '../../../data/cashier-api-source';
import CashierUrlParser from '../../../routes/cashier/url-cashier-parser';
import printDiv from '../../../utils/print';
import sideBarActive from '../../../utils/sideBar-active';
import { createDetailReportTemplate } from '../../templates/cashier/cashier-template-creator';

const detailReport = {
  async render() {
    return `
    <div class="arrow-back">
      <a href="/kasir/#/report""><i class="fa-solid fa-left-long"></i> Kembali</a>
    </div>
    <form class="detail-report mt-3" id="print-transaction"></form>
    <div class="print">
      <button class="btn btn-success" id="print-button" aria-label="print">Cetak</button>
    </div>
    `;
  },

  async afterRender() {
    document.title = 'Detail Report';
    document.querySelector('.navbar-brand').innerHTML = 'Laporan';
    const detailReportWrapper = document.querySelector('.detail-report');
    sideBarActive(document.querySelector('#sidebar li:nth-child(5)'));

    const url = CashierUrlParser.parseActiveUrlWithoutCombiner();
    const response = await CashierApiSource.getTransactionById(url.id);

    detailReportWrapper.innerHTML = createDetailReportTemplate(response);

    const printButton = document.querySelector('#print-button');
    printButton.addEventListener('click', (e) => {
      e.preventDefault();
      printDiv('print-transaction');
    });
  },
};

export default detailReport;

import CashierApiSource from '../../../data/cashier-api-source';
import CashierUrlParser from '../../../routes/cashier/url-cashier-parser';
import sideBarActive from '../../../utils/sideBar-active';
import { createDetailReportTemplate } from '../../templates/cashier/cashier-template-creator';

const detailReport = {
  async render() {
    return `
    <div class="arrow-back">
        <a href="/kasir/#/report"<i class="uil uil-arrow-left"></i></a>
    </div>
    <form class="detail-report"></form>
    <div class="print">
      <button class="btn btn-success">Cetak</button>
    </div>
    `;
  },

  async afterRender() {
    const detailReportWrapper = document.querySelector('.detail-report');
    sideBarActive(document.querySelector('#sidebar li:nth-child(5)'));

    const url = CashierUrlParser.parseActiveUrlWithoutCombiner();
    const response = await CashierApiSource.getTransactionById(url.id);

    detailReportWrapper.innerHTML = createDetailReportTemplate(response);
  },
};

export default detailReport;

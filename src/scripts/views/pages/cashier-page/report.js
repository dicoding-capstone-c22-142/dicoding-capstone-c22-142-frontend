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
    <div class="row bg-white report mt-3"></div>
    `;
  },

  async afterRender() {
    document.title = 'Laporan';
    document.querySelector('.navbar-brand').innerHTML = 'Laporan';
    const reportWrapper = document.querySelector('.report');

    const sideBarListActive = document.querySelector('#sidebar li:nth-child(5)');
    sideBarActive(sideBarListActive);

    reportWrapper.innerHTML = createReport();
  },
};

export default Report;

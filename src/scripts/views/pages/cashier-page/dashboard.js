import CashierApiSource from '../../../data/cashier-api-source';
import convertIsoDateToDate from '../../../utils/convertIsoDate';
import sideBarActive from '../../../utils/sideBar-active';
import { createDashboardTemplate } from '../../templates/cashier/cashier-template-creator';

const Dashboard = {
  async render() {
    return '';
  },

  async afterRender() {
    document.title = 'Dashboard';
    document.querySelector('.navbar-brand').innerHTML = 'Dashboard';

    const sideBarListActive = document.querySelector('#sidebar li:nth-child(1)');
    sideBarActive(sideBarListActive);

    const mainContent = document.querySelector('.main-content');
    const transactions = await CashierApiSource.getAllTransactions();
    const dateNow = convertIsoDateToDate(new Date().toISOString);
    const datas = transactions.filter((item) => convertIsoDateToDate(item.updatedAt) === dateNow);
    mainContent.innerHTML = createDashboardTemplate(datas);
  },
};

export default Dashboard;

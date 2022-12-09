import CashierApiSource from '../../../data/cashier-api-source';
import convertIsoDateToDate from '../../../utils/convertIsoDate';
import sideBarActive from '../../../utils/sideBar-active';
import { createDashboardTableTransactionTemplate, createDashboardTemplate } from '../../templates/cashier/cashier-template-creator';

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
    const transactionLength = transactions.length;
    const dateNow = convertIsoDateToDate(new Date().toISOString());
    const todayTransaction = (transactions
      .filter((item) => convertIsoDateToDate(new Date(item.updatedAt).toDateString()) === dateNow));
    const todayTransactionLength = todayTransaction.length;
    const income = this._income(transactions);
    const todayIncome = this._income(todayTransaction);

    mainContent.innerHTML = createDashboardTemplate({
      transactionLength, income, todayTransactionLength, todayIncome,
    });

    const tableTransaction = document.querySelector('#table-transaction');
    todayTransaction.forEach((transaction) => {
      tableTransaction.innerHTML += createDashboardTableTransactionTemplate(transaction);
    });
  },

  _income(array) {
    let element = null;
    for (let index = 0; index < array.length; index += 1) {
      element += array[index].total_bill;
    }
    return element;
  },
};

export default Dashboard;

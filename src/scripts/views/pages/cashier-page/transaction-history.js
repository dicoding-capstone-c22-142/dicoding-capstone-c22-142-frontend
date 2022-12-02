import sideBarActive from '../../../utils/sideBar-active';

const TransactionHistory = {
  async render() {
    return '';
  },

  async afterRender() {
    const mainContent = document.querySelector('.main-content');

    const sideBarListActive = document.querySelector('#sidebar li:nth-child(6)');
    sideBarActive(sideBarListActive);

    mainContent.innerHTML = `
        <div class="text">Transaction Hystory</div>
      `;
  },
};

export default TransactionHistory;

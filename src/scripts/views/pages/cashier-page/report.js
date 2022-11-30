import sideBarActive from '../../../utils/sideBar-active';

const Report = {
  async render() {
    return '';
  },

  async afterRender() {
    const mainContent = document.querySelector('.main-content');

    const sideBarListActive = document.querySelector('#sidebar li:nth-child(5)');
    sideBarActive(sideBarListActive);

    mainContent.innerHTML = `
        <div class="text">Report</div>
      `;
  },
};

export default Report;

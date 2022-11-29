const Report = {
  async render() {
    return '';
  },

  async afterRender() {
    const mainContent = document.querySelector('.main-content');

    const list = document.querySelectorAll('#sidebar li');
    const sideBarListActive = document.querySelector('#sidebar li:nth-child(5)');
    list.forEach(() => {
      list.forEach((active) => {
        active.classList.remove('active');
      });
      sideBarListActive.classList.add('active');
    });

    mainContent.innerHTML = `
        <div class="text">Report</div>
      `;
  },
};

export default Report;

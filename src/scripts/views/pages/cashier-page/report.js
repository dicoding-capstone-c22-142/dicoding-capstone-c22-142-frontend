const Report = {
  async render() {
    return '';
  },

  async afterRender() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="text">Report</div>
      `;
  },
};

export default Report;

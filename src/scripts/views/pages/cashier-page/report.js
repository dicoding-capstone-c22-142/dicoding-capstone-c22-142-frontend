const Report = {
  async render() {
    return '<div class="wrapper"></div>';
  },

  async afterRender() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = `
        <div class="text">Report</div>
      `;
  },
};

export default Report;

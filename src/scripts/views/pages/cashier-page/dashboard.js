const Dashboard = {
  async render() {
    return '<div class="wrapper"></div>';
  },

  async afterRender() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = `
      <h1>helo</h1>
    `;
  },
};

export default Dashboard;

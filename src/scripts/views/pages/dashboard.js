const Dashboard = {
  async render() {
    return '';
  },

  async afterRender() {
    const main = document.body;
    main.style.backgroundColor = '#eaeaea';
    main.innerHTML = `
      <side-bar><side-bar>
    `;
  },
};

export default Dashboard;

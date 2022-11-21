import { createLandingPage } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <header-bar></header-bar>
        <div class="content"></div>
    `;
  },

  async afterRender() {
    const content = document.querySelector('.content');
    content.innerHTML = createLandingPage();
  },
};

export default Home;

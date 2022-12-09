import { createAboutPage } from '../../templates/template-creator';

const Home = {
  async render() {
    return `
        <header-bar id="headerBar"></header-bar>
        <div id="contentAbout" class="content-about"></div>
    `;
  },

  async afterRender() {
    const contentAbout = document.querySelector('.content-about');
    contentAbout.innerHTML = createAboutPage();
  },
};

export default Home;

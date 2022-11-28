import {createAboutPage } from '../../templates/template-creator';

const Home = {
  async render() {
    return `
        <header-bar></header-bar>
        
        <div class="contentAbout"></div>
    `;
  },

  async afterRender() {
    const content = document.querySelector('.content');
    const contentAbout = document.querySelector('.contentAbout')
    // content.innerHTML = createLandingPage();
    contentAbout.innerHTML = createAboutPage();
  },
};

export default Home;

import sideBarActive from '../../../utils/sideBar-active';
import { createProfileTemplate } from '../../templates/cashier/cashier-template-creator';

const Profile = {
  async render() {
    return `
      <form action="/" class="row bg-white profile-wrapper"></form>
    `;
  },

  async afterRender() {
    document.title = 'Profile';
    document.querySelector('.navbar-brand').innerHTML = 'Profile';
    const sideBarListActive = document.querySelector('.small-screen li:nth-child(1)');
    sideBarActive(sideBarListActive);

    const profileWrapper = document.querySelector('.profile-wrapper');
    profileWrapper.innerHTML = createProfileTemplate();
  },
};

export default Profile;

import sideBarActive from '../../../utils/sideBar-active';
import { createSettingsTemplate } from '../../templates/cashier/cashier-template-creator';

const Settings = {
  async render() {
    return `
      <div class="row bg-white settings-wrapper"></div>
    `;
  },

  async afterRender() {
    document.title = 'Settings';
    document.querySelector('.navbar-brand').innerHTML = 'Pengaturan';
    const sideBarListActive = document.querySelector('.small-screen li:nth-child(2)');
    sideBarActive(sideBarListActive);

    const settingsWrapper = document.querySelector('.settings-wrapper');
    settingsWrapper.innerHTML = createSettingsTemplate();
  },
};

export default Settings;

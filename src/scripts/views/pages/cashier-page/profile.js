const Profile = {
  async render() {
    return '';
  },

  async afterRender() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="text">Profile</div>
      `;
  },
};

export default Profile;

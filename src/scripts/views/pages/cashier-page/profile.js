const Profile = {
  async render() {
    return '<div class="wrapper"></div>';
  },

  async afterRender() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = `
        <div class="text">Profile</div>
      `;
  },
};

export default Profile;

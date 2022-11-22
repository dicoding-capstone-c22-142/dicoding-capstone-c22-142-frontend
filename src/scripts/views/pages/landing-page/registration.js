const Registration = {
  async render() {
    return '';
  },

  async afterRender() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = `
        <div class="d-flex align-items-center" style="height: 100vh; background-color: steelblue">
            <h1>ini halaman Registration</h1>
        </div>`;
  },
};

export default Registration;

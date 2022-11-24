const TransactionHistory = {
  async render() {
    return '<div class="wrapper"></div>';
  },

  async afterRender() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = `
        <div class="text">Transaction Hystory</div>
      `;
  },
};

export default TransactionHistory;

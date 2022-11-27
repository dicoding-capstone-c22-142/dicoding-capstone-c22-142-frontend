const TransactionHistory = {
  async render() {
    return '';
  },

  async afterRender() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="text">Transaction Hystory</div>
      `;
  },
};

export default TransactionHistory;

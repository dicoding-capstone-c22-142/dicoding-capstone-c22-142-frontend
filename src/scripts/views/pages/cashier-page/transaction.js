const Transaction = {
  async render() {
    return '';
  },

  async afterRender() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="text">Transaction</div>
      `;
  },
};

export default Transaction;

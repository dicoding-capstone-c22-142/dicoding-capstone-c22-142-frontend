class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="header-inline">
      <h1 class="fw-bolder">Welcome To CashTex</h1>
      <p>Pilihan terbaik untuk mengembangkan bisnis anda. Gunakan Cashtex agar anda dapat dengan mudah untuk melakukan transaksi dengan pelanggan.</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Sign In</button>
        <a href="/registration">Sign Up</a>
      </div>
      <div class="header-img">
        <img src="./heros/hero-cashier.png">
      </div>
    `;
  }
}
customElements.define('header-bar', HeaderBar);

class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="header-inline">
        <h1>Welcome To CashTex</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla voluptatum magni doloremque id pariatur earum voluptatibus, ratione dolor aut velit?</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Sign In</button>
        <a href="#/registration">Sign Up</a>
      </div>
      <div class="header-img">
        <img src="./heros/hero-cashier.png">
      </div>
    `;
  }
}
customElements.define('header-bar', HeaderBar);

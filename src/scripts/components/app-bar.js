class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div><a href="/"><h2>CashTex</h2></a></div>
      <div class="drawer">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#/guide">Guide</a></li>
            <li><a href="#/about">About Us</a></li>
          </ul>
          <div class="registration">
            <button type="button" class="btn btn-primary btn-login" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
            <a class="signup" href="#/registration">Get Started</a>
          </div>
      </div>
      <button id="nav-toggle" aria-label="navigation-menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    `;
  }
}
customElements.define('app-bar', AppBar);

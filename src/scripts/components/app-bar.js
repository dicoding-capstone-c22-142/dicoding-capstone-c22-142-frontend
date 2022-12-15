class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div><a href="/"><h2>CashTex</h2></a></div>
      <div class="drawer">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="https://drive.google.com/file/d/1fvemGyR4y3tuFW3IvLUzCpuCnGZ8HgfF/preview" target="_blank" rel="noopener">Guide</a></li>
          </ul>
          <div class="registration">
            <button type="button" class="btn btn-login" data-bs-toggle="modal" data-bs-target="#loginModal">Sign in</button>
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

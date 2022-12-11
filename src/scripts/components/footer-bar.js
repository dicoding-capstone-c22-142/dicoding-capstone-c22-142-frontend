class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .copyright p {
          background-color: #253944;
          text-align: center;
          color: white;
          padding: 20px;
          font-size: .9em;
        }
      </style>

      <div class="copyright">
        <p>Copyright &copy; 2022 Dicoding Capstone C22-142</p>
      </div>
    `;
  }
}
customElements.define('footer-bar', FooterBar);

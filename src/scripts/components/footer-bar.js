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

        .supported {
          padding: 40px 0;
          display: flex;
          justify-content: center;
          border-top: 1px solid #eaeaea;
          align-items: center;
          flex-direction: column;
        }

        .supported h1 {
          text-align: center; 
        }

        .supported img {
          width: 200px;
        }

        .copyright p {
          background-color: #253944;
          text-align: center;
          color: white;
          padding: 20px;
          font-size: 1em;
        }
      </style>
      <div class="supported">
        <h1>Didukung oleh</h1>
        <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/kampus-merdeka-x-dicoding.png" alt="kampus merdeka">
      </div>
      <div class="copyright">
        <p>Copyright &copy; 2022 Dicoding Capstone C22-142</p>
      </div>
    `;
  }
}
customElements.define('footer-bar', FooterBar);

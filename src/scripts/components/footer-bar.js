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

        footer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background-color: #1c2a35;
          color: white;
          padding: 60px;
        }

        h1 {
          font-size: 1.4em;
        }

        li {
          list-style: none;
        }

        a {
          text-decoration: none;
          color: white;
        }

        a:hover {
          color: #aaa
        }

        .copyright p {
          background-color: #253944;
          text-align: center;
          color: white;
          padding: 20px;
          font-size: .9em;
        }
      </style>

      <footer>
        <div class="quick-links">
          <h1>QUICK LINKS</h1>
          <ul>
          <li><a href="#headerBar">Home</a></li>
          <li><a href="#contentAbout">About Us</a></li>
          </ul>
        </div>
        <div class="contacts">
          <h1>CONTACTS</h1>
          <ul>
            <li>Github:</li>
            <li>https://github.com/dicoding-capstone-c22-142</li>
          </ul>
          <ul>
            <li>Addres:</li>
          </ul>
        </div>
      </footer>
      <div class="copyright">
        <p>Copyright &copy; 2022 Dicoding Capstone C22-142</p>
      </div>
    `;
  }
}
customElements.define('footer-bar', FooterBar);

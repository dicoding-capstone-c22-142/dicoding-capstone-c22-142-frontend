class SideBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header>
            <div class="image-text">
                <span class="image">
                    <!--<img src="logo.png" alt="">-->
                </span>

                <div class="text logo-text">
                    <span class="name">MulyaTex</span>
                    <span class="profession">Kota Sigli</span>
                </div>
            </div>

            <i class="uil uil-angle-right toggle icon"></i>
        </header>

    <div class="menu-bar">
        <div class="menu">
            <ul class="menu-links">
                <li class="nav-link">
                    <a href="#/users/:id/dashboard">
                        <i class="uil uil-house-user icon"></i>
                        <span class="text nav-text">Dashboard</span>
                    </a>
                </li>

                <li class="nav-link">
                    <a href="#/users/:id/transaction">
                        <i class="uil uil-transaction icon"></i>
                        <span class="text nav-text">Transaksi</span>
                    </a>
                </li>

                <li class="nav-link">
                    <a href="#/users/1/manage">
                        <i class="uil uil-book-medical icon"></i>
                        <span class="text nav-text">Kelola Produk</span>
                    </a>
                </li>

                <li class="nav-link">
                    <a href="#/users/1/report">
                        <i class="uil uil-file-graph icon"></i>
                        <span class="text nav-text">Laporan</span>
                    </a>
                </li>

                <li class="nav-link">
                    <a href="#/users/1/transaction-history">
                        <i class="uil uil-history icon"></i>
                        <span class="text nav-text">Riwayat Transaksi</span>
                    </a>
                </li>

            </ul>
        </div>

        <div class="bottom-content">
            <li class="">
                <a href="/">
                    <i class="uil uil-signout icon"></i>
                    <span class="text nav-text">Logout</span>
                </a>
            </li>

            <li class="mode">
                <div class="sun-moon">
                    <i class="uil uil-moon icon moon"></i>
                    <i class="uil uil-sun icon sun"></i>
                </div>
                <span class="mode-text text">Dark mode</span>

                <div class="toggle-switch">
                    <span class="switch"></span>
                </div>
            </li>
        </div>
    </div>
    `;
  }
}
customElements.define('side-bar', SideBar);

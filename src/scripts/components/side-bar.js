class SideBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3><img src="../icons/Asset - C22-142-72x72.png" class="img-fluid" alt="logo brand"/><span>cashtex</span></h3>
        </div>
        <ul class="list-unstyled components">
            <li>
                <a href="/kasir/#/dashboard" class="dashboard"><i class="uil uil-home"></i><span>Dashboard</span></a>
            </li>

            <div class="small-screen navbar-display">
                <li class="d-lg-none d-md-block d-xl-none d-sm-block">
                    <a href="/kasir/#/profile"><i class="uil uil-user-circle"></i><span>Profile</span></a>
                </li>

                <li class="d-lg-none d-md-block d-xl-none d-sm-block">
                    <a href="/kasir/#/settings"><i class="uil uil-setting"></i><span>setting</span></a>
                </li>
            </div>

            <li>
                <a href="/kasir/#/manage"><i class="uil uil-book-medical"></i><span>Kelola Produk</span></a>
            </li>
            <li>
                <a href="/kasir/#/transaction"><i class="uil uil-transaction"></i><span>Transaksi</span></a>
            </li>
            <li>
                <a href="/kasir/#/report"><i class="uil uil-file-graph"></i><span>Laporan</span></a>
            </li>
        </ul>
    </nav>
    `;
  }
}
customElements.define('side-bar', SideBar);

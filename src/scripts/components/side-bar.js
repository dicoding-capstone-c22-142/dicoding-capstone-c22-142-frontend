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
                <a href="/kasir/#/dashboard" class="dashboard"><i class="fa-solid fa-house"></i><span>Dashboard</span></a>
            </li>

            <div class="small-screen navbar-display">
                <li class="d-lg-none d-md-block d-xl-none d-sm-block">
                    <a href="/kasir/#/profile"><i class="fa-regular fa-user"></i><span>Profile</span></a>
                </li>

                <li class="d-lg-none d-md-block d-xl-none d-sm-block">
                    <a href="/kasir/#/settings"><i class="fa-solid fa-gear"></i><span>setting</span></a>
                </li>
            </div>

            <li>
                <a href="/kasir/#/manage"><i class="fa-solid fa-layer-group"></i><span>Kelola Produk</span></a>
            </li>
            <li>
                <a href="/kasir/#/transaction"><i class="fa-solid fa-cash-register"></i><span>Transaksi</span></a>
            </li>
            <li>
                <a href="/kasir/#/report"><i class="fa-solid fa-file-invoice-dollar"></i><span>Laporan</span></a>
            </li>
        </ul>
    </nav>
    `;
  }
}
customElements.define('side-bar', SideBar);

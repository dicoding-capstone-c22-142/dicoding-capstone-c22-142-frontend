class SideBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3><img src="img/logo.png" class="img-fluid" /><span>Vishweb design</span></h3>
        </div>
        <ul class="list-unstyled components">
            <li class="active">
                <a href="#/:id/dashboard" class="dashboard"><i class="uil uil-home"></i><span>Dashboard</span></a>
            </li>

            <div class="small-screen navbar-display">
                <li class="d-lg-none d-md-block d-xl-none d-sm-block">
                    <a href="#/:id/profile"><i class="uil uil-user-circle"></i><span>user</span></a>
                </li>

                <li class="d-lg-none d-md-block d-xl-none d-sm-block">
                    <a href="#/:id/settings"><i class="uil uil-setting"></i><span>setting</span></a>
                </li>
            </div>

            <li class="">
                <a href="#/:id/manage"><i class="uil uil-book-medical"></i><span>Kelola Produk</span></a>
            </li>
            <li class="">
                <a href="#/:id/transaction"><i class="uil uil-transaction"></i><span>Transaksi</span></a>
            </li>
            <li class="">
                <a href="#/:id/report"><i class="uil uil-file-graph"></i><span>Laporan</span></a>
            </li>
            <li class="">
                <a href="#/:id/transaction-history"><i class="uil uil-history"></i><span>Riwayat Transaksi</span></a>
            </li>
        </ul>
    </nav>
    `;
  }
}
customElements.define('side-bar', SideBar);

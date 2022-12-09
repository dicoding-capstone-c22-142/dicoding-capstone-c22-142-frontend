const createAboutPage = () => `

<div class="d-flex flex-column mb-3 align-items-center" style="height: 100vh; background-color: #fff">
      <div class="about">
        <h1 class= "fw-bolder text-center">About</h1>
        <div class="text-wrap"><p class="text-center">Cashtex merupakan aplikasi kasir yang memudahkan toko tekstil untuk 
        bertransaksi dengan pelanggannya. Cashtex dapat mengelola laporan seluruh transaksi penjualan, 
        tanpa harus  membeli mesin kasir. Aplikasi yang kami bangun berbasis website, bisa digunakan secara 
        offline, dan dapat digunakan di berbagai device</p>
        </div>
        </div>

        <div class="features">
        <h1 class= "fw-bolder text-center">Features</h1>
        <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-laptop"></i></div>
              <h4 class="title">Dashboard</h4>
              <p class="description">Anda dapat dengan mudah mengatur pengguna dan daftar transaksi dengan 
              halaman dashboard</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-card-checklist"></i></div>
              <h4 class="title">Report</h4>
              <p class="description">Pantau hasil penjualan anda dengan halaman Report dengan jangka waktu yang dapat anda tentukan sendiri</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-clipboard-data"></i></div>
              <h4 class="title">Transaction history</h4>
              <p class="description">Segala transaksi akan secara otomatis tercatat di halaman Transaction history</p>
            </div>
          </div>
        </div>
      </div>
</div>
</div>
`;

export { createAboutPage };
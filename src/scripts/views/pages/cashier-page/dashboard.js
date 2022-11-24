const Dashboard = {
  async render() {
    return '<div class="wrapper"></div>';
  },

  async afterRender() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = `
    <div id="content">
      <div class="top-navbar">
          <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">

                  <button type="button" id="sidebarCollapse" class="d-xl-block d-lg-block d-md-mone d-none">
                    <i class="uil uil-angle-left"></i>
                  </button>

                  <a class="navbar-brand" href="#"> Dashboard </a>

                  <button class="d-inline-block d-lg-none ml-auto more-button" type="button"
                      data-toggle="collapse" data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <i class="uil uil-ellipsis-v"></i>
                  </button>

                  <div class="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none justify-content-end"
                      id="navbarSupportedContent">
                      <ul class="nav navbar-nav ml-auto">
                          <li class="nav-item">
                              <a class="nav-link" href="#">
                                <i class="uil uil-user"></i>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">
                                <i class="uil uil-setting"></i>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </div>


      <div class="main-content">

          <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="card card-stats">
                      <div class="card-header">
                          <div class="icon icon-warning">
                              
                          </div>
                      </div>
                      <div class="card-content">
                          <p class="category"><strong>Visits</strong></p>
                          <h3 class="card-title">70,340</h3>
                      </div>
                      <div class="card-footer">
                          <div class="stats">
                              <i class="uil uil-info-circle"></i>
                              <a href="#pablo">See detailed report</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="card card-stats">
                      <div class="card-header">
                          <div class="icon icon-rose">
                              
                          </div>
                      </div>
                      <div class="card-content">
                          <p class="category"><strong>Orders</strong></p>
                          <h3 class="card-title">102</h3>
                      </div>
                      <div class="card-footer">
                          <div class="stats">
                              Product-wise sales
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="card card-stats">
                      <div class="card-header">
                          <div class="icon icon-success">

                          </div>
                      </div>
                      <div class="card-content">
                          <p class="category"><strong>Revenue</strong></p>
                          <h3 class="card-title">$23,100</h3>
                      </div>
                      <div class="card-footer">
                          <div class="stats">
                              Weekly sales
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="card card-stats">
                      <div class="card-header">
                          <div class="icon icon-info">
                          </div>
                      </div>
                      <div class="card-content">
                          <p class="category"><strong>Followers</strong></p>
                          <h3 class="card-title">+245</h3>
                      </div>
                      <div class="card-footer">
                          <div class="stats">
                              Just Updated
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div class="row ">
              <div class="col-md-12">
                  <div class="card" style="min-height: 485px">
                      <div class="card-header card-header-text">
                          <h4 class="card-title">Employees Stats</h4>
                          <p class="category">New employees on 15th December, 2016</p>
                      </div>
                      <div class="card-content table-responsive">
                          <table class="table table-hover">
                              <thead class="text-primary">
                                  <tr>
                                      <th>ID</th>
                                      <th>Name</th>
                                      <th>Salary</th>
                                      <th>Country</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td>Bob Williams</td>
                                      <td>$23,566</td>
                                      <td>USA</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td>Mike Tyson</td>
                                      <td>$10,200</td>
                                      <td>Canada</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td>Tim Sebastian</td>
                                      <td>$32,190</td>
                                      <td>Netherlands</td>
                                  </tr>
                                  <tr>
                                      <td>4</td>
                                      <td>Philip Morris</td>
                                      <td>$31,123</td>
                                      <td>Korea, South</td>
                                  </tr>
                                  <tr>
                                      <td>5</td>
                                      <td>Minerva Hooper</td>
                                      <td>$23,789</td>
                                      <td>South Africa</td>
                                  </tr>
                                  <tr>
                                      <td>6</td>
                                      <td>Hulk Hogan</td>
                                      <td>$43,120</td>
                                      <td>Netherlands</td>
                                  </tr>
                                  <tr>
                                      <td>7</td>
                                      <td>Angelina Jolie </td>
                                      <td>$12,140</td>
                                      <td>Australia</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    `;
  },
};

export default Dashboard;

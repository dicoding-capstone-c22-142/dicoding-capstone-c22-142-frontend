class MainBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="top-navbar">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                <button type="button" id="sidebarCollapse" aria-label="button collapse" class="d-xl-block d-lg-block d-md-mone d-none">
                    <i class="fa-solid fa-angles-left" style="font-size: 1em;"></i>
                </button>
                <a class="navbar-brand" href="#"></a>

                <button class="d-inline-block d-lg-none ml-auto more-button" style="padding: 10px;" type="button"
                data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>

                <div class="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none justify-content-end"
                    id="navbarSupportedContent">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/kasir/#/profile" aria-label="profile">
                                <i class="fa-solid fa-user"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/kasir/#/settings" aria-label="settings">
                                <i class="fa-solid fa-gear"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    `;
  }
}

customElements.define('main-bar', MainBar);

const SideBarInitiator = {
  init({
    sideBar, content, bodyOverlay, moreButton, sideBarCollapse,
  }) {
    sideBarCollapse.addEventListener('click', (event) => {
      const addButtonProduct = document.querySelector('#add-product');
      addButtonProduct.classList.toggle('transform');
      this._toggleSideBar(event, sideBar, content);
    });
    moreButton.addEventListener('click', (event) => {
      this._toggleShowNav(event, sideBar, bodyOverlay);
    });
    bodyOverlay.addEventListener('click', (event) => {
      this._toggleShowNav(event, sideBar, bodyOverlay);
    });
  },

  _toggleSideBar(event, sideBar, content) {
    sideBar.classList.toggle('active');
    content.classList.toggle('active');
    event.stopPropagation();
  },

  _toggleShowNav(event, sideBar, bodyOverlay) {
    sideBar.classList.toggle('show-nav');
    bodyOverlay.classList.toggle('show-nav');
    event.stopPropagation();
  },
};

export default SideBarInitiator;

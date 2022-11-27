const SideBarInitiator = {
  init({
    sideBar, content, bodyOverlay, moreButton, sideBarCollapse,
  }) {
    sideBarCollapse.addEventListener('click', (event) => {
      console.log('ok');
      this._toggleSideBar(event, sideBar, content);
    });
    moreButton.addEventListener('click', (event) => {
      this._toggleShowNav(event, sideBar, bodyOverlay);
    });
    bodyOverlay.addEventListener('click', (event) => {
      this._toggleShowNav(event, sideBar, bodyOverlay);
    });

    const list = sideBar.querySelectorAll('li');
    list.forEach((element) => {
      element.addEventListener('click', () => {
        list.forEach((active) => {
          active.classList.remove('active');
        });
        element.classList.add('active');
      });
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

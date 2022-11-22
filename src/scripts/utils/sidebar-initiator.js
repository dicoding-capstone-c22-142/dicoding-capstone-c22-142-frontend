const appBarInitiator = {
  init({
    sideBar, toggle, modeSwitch, modeText,
  }) {
    toggle.addEventListener('click', (event) => {
      this._toggleSidebar(event, sideBar);
    });

    modeSwitch.addEventListener('click', (event) => {
      event.stopPropagation();
      document.body.classList.toggle('dark');
    });
  },

  _toggleSidebar(event, sideBar) {
    event.stopPropagation();
    this.sidebar.classList.toggle('close');
  },
};

export default appBarInitiator;

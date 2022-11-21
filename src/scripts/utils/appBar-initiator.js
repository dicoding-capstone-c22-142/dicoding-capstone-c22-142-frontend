const appBarInitiator = {
  init({
    nav, button, drawer, wrapper, span,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, span);
    });

    wrapper.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, span);
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 50) {
        nav.classList.add('active-nav');
      } else {
        nav.classList.remove('active-nav');
      }
    });
  },

  _toggleDrawer(event, drawer, span) {
    span[0].classList.toggle('rotate45');
    span[1].classList.toggle('isLost');
    span[2].classList.toggle('rotate-45');
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer, span) {
    span[0].classList.remove('rotate45');
    span[1].classList.remove('isLost');
    span[2].classList.remove('rotate-45');
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default appBarInitiator;

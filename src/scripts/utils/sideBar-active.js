const sideBarActive = (sideBarListActive) => {
  const list = document.querySelectorAll('#sidebar li');
  list.forEach(() => {
    list.forEach((active) => {
      active.classList.remove('active');
    });
    sideBarListActive.classList.add('active');
  });
};

export default sideBarActive;

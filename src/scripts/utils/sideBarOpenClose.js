const sideBarCloseOpen = () => {
  const sidebar = document.querySelector('#sidebar');
  const content = document.querySelector('#content');
  document.querySelector('#sidebarCollapse').addEventListener('click', () => {
    sidebar.classList.toggle('active');
    content.classList.toggle('active');
  });

  document.querySelector('.more-button').addEventListener('click', () => {
    document.querySelector('#sidebar').classList.toggle('show-nav');
    document.querySelector('.body-overlay').classList.toggle('show-nav');
  });
  document.querySelector('.body-overlay').addEventListener('click', () => {
    document.querySelector('#sidebar').classList.toggle('show-nav');
    document.querySelector('.body-overlay').classList.toggle('show-nav');
  });
};

export default sideBarCloseOpen;

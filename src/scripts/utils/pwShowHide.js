const pwShowHide = () => {
  const showHide = document.querySelector('.showHidePw');
  const pwField = document.querySelector('.password');
  showHide.addEventListener('click', () => {
    if (pwField.type === 'password') {
      pwField.type = 'text';
      showHide.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
      pwField.type = 'password';
      showHide.classList.replace('fa-eye', 'fa-eye-slash');
    }
  });
};

export default pwShowHide;

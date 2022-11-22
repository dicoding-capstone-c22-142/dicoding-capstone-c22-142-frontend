const pwShowHide = () => {
  const showHide = document.querySelector('.showHidePw');
  const pwField = document.querySelector('.password');
  showHide.addEventListener('click', () => {
    if (pwField.type === 'password') {
      pwField.type = 'text';
      showHide.classList.replace('uil-eye-slash', 'uil-eye');
    } else {
      pwField.type = 'password';
      showHide.classList.replace('uil-eye', 'uil-eye-slash');
    }
  });
};

export default pwShowHide;

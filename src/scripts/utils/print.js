const printDiv = (divName) => {
  const printContents = document.getElementById(divName).innerHTML;

  document.body.innerHTML = printContents;
  document.querySelector('h3').style.marginTop = '20px';

  window.print();

  window.location.reload();
};

export default printDiv;

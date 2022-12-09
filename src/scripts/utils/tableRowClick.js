const tableRowClick = (tableRow) => {
  tableRow.forEach((tr) => {
    tr.addEventListener('click', (element) => {
      const id = element.path[1].getAttribute('id');
      window.location = `/kasir/#/report/transaction/${id}`;
    });
  });
};

export default tableRowClick;

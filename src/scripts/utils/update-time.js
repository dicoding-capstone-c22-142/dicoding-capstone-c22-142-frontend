import moment from 'moment';

const displayTime = () => {
  try {
    moment.locale('id');
    document.querySelector('.time').innerText = moment().format('LTS');
  } catch { /* empty */ }
};

const updateTime = () => {
  displayTime();
  setTimeout(updateTime, 1000);
};

export default updateTime;

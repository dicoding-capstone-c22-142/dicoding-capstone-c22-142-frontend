import moment from 'moment';

const displayTime = () => {
  moment.locale('id');
  document.querySelector('.time').innerText = moment().format('LTS');
};

const updateTime = () => {
  displayTime();
  setTimeout(updateTime, 1000);
};

export default updateTime;

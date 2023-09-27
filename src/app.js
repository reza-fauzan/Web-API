import './styles/style.css';
import main from './script/view/main.js';
import moment from 'moment';
import $ from 'jquery';
import 'regenerator-runtime';

document.addEventListener('DOMContentLoaded', main);

const displayTime = () => {
    moment.locale('id');
    $('.time').text(moment().format('LTS'));
    $('.date').text(moment().format('LL'));
  };
   
  const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000);
  };
   
  updateTime();
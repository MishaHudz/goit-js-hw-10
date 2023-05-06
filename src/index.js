import debounce from 'lodash.debounce';
import { fetchCountries } from './css/js/fetchCountries';
import {
  generateHTMLforOneCountry,
  clearMarcup,
  generateHTMLListCountry,
} from './css/js/generateMakcup';
import { showToManyMassage, showErrorMassage } from './css/js/message';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputFild = document.querySelector('#search-box');
export const coutryList = document.querySelector('.country-list');
export const infoFildForOneCountry = document.querySelector('.country-info');

inputFild.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(evt) {
  const inputValue = evt.target.value.trim();
  if (!inputValue) {
    clearMarcup();
    return;
  }
  fetchCountries(inputValue)
    .then(res => {
      if (res.length > 10) {
        clearMarcup();
        showToManyMassage();
      }
      if (res.length === 1) {
        clearMarcup();
        infoFildForOneCountry.classList.add('style');
        infoFildForOneCountry.insertAdjacentHTML(
          'afterbegin',
          generateHTMLforOneCountry(res)
        );
      }
      if (res.length > 1 && res.length <= 10) {
        clearMarcup();
        coutryList.insertAdjacentHTML(
          'afterbegin',
          generateHTMLListCountry(res)
        );
      }
    })
    .catch(() => {
      showErrorMassage();
      clearMarcup();
    });
}

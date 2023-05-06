import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import {
  generateHTMLforOneCountry,
  clearMarcup,
  generateHTMLListCountry,
} from './js/generateMakcup';
import { showToManyMassage, showErrorMassage } from './js/message';
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
      clearMarcup();
      if (res.length > 10) {
        showToManyMassage();
        return;
      }
      if (res.length === 1) {
        infoFildForOneCountry.classList.add('visible-coutry-card');
        infoFildForOneCountry.insertAdjacentHTML(
          'afterbegin',
          generateHTMLforOneCountry(res)
        );
        return;
      }
      if (res.length > 1 && res.length <= 10) {
        coutryList.insertAdjacentHTML(
          'afterbegin',
          generateHTMLListCountry(res)
        );
        return;
      }
    })
    .catch(() => {
      showErrorMassage();
      clearMarcup();
    });
}

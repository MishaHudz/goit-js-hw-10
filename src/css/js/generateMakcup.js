import { coutryList, infoFildForOneCountry } from '../../index';

export function generateHTMLforOneCountry(coutryObj) {
  const {
    flags: { png, alt },
    capital,
    population,
    languages,
    name: { official },
  } = coutryObj[0];

  const counryCapitel = capital.join('');
  const countryLanguagesList = Object.values(languages).join(',');
  const markup = `<img class="country-info-flag" width="60px" height="40px" src="${png}" alt="${alt}" />
<p class="country-info-name">${official}</p>

<ul class="description-list">
  <li class="description-list-item">Capitel:<span class="description-list-value">${counryCapitel}</span></li>
  <li class="description-list-item">Population:<span class="description-list-value">${population}</span></li>
  <li class="description-list-item">Languages:<span class="description-list-value">${countryLanguagesList}</span></li>
</ul>`;
  return markup;
}

export function clearMarcup() {
  infoFildForOneCountry.innerHTML = '';
  coutryList.innerHTML = '';
}

export function generateHTMLListCountry(coutryArr) {
  const markup = coutryArr
    .map(country => {
      const {
        name: { official },
        flags: { png, alt },
      } = country;
      return `  <li class="country-list-item">
        <img class="country-list-item-img" width="60px" height="40px" src="${png}" alt="${alt}" />
        <p class="country-list-item-desc">${official}</p>
      </li>`;
    })
    .join('');
  return markup;
}

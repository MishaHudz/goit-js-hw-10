import { coutryList, infoFildForOneCountry } from '../index';

export function generateHTMLforOneCountry(coutryObj) {
  const {
    flags: { svg, alt },
    capital,
    population,
    languages,
    name: { official },
  } = coutryObj[0];

  const counryCapitel = capital.join('');
  const countryLanguagesList = Object.values(languages).join(', ');
  const markup = `<img class="country-info-flag"  src="${svg}" alt="${alt}" width="100px"/>
<p class="country-info-name">${official}</p>

<ul class="description-list">
  <li class="description-list-item">Capitel:<span class="description-list-value">&nbsp;${counryCapitel}</span></li>
  <li class="description-list-item">Population:<span class="description-list-value">&nbsp;${population}</span></li>
  <li class="description-list-item">Languages:<span class="description-list-value">&nbsp;${countryLanguagesList}</span></li>
</ul>`;
  return markup;
}

export function clearMarcup() {
  infoFildForOneCountry.innerHTML = '';
  coutryList.innerHTML = '';
  infoFildForOneCountry.classList.remove('visible-coutry-card');
}

export function generateHTMLListCountry(coutryArr) {
  const markup = coutryArr
    .map(country => {
      const {
        name: { official },
        flags: { svg, alt },
      } = country;
      return `<li class="country-list-item">        
                <img class="country-list-item-img" src="${svg}" alt="${alt}" width="60px" /
                <p class="country-list-item-desc">${official}</p>
            </li>`;
    })
    .join('');
  return markup;
}

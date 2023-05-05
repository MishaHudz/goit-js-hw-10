import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function showToManyMassage() {
  Notify.info('Too many matches found. Please enter a more specific name.');
}

export function showErrorMassage() {
  Notify.failure('Oops, there is no country with that name.');
}

import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function showToManyMassage() {
  Notify.info('Too many matches found. Please enter a more specific name.', {
    showOnlyTheLastOne: true,
    timeout: 1000,
  });
}

export function showErrorMassage() {
  Notify.failure('Oops, there is no country with that name.', {
    showOnlyTheLastOne: true,
    timeout: 1000,
  });
}

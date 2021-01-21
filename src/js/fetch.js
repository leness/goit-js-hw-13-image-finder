import template from '../templates/photo_card.hbs'

import refs from './refs';
// import template from '../templates/images.hbs';

function imageCardMarkup(imageCard) {
  const markup = template(imageCard);

  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

export default imageCardMarkup;
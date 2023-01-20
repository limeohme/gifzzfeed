import { FULL_HEART, EMPTY_HEART } from '../../common/constants.js';
import { addFavorite, getFavorites, removeFavorite } from '../request-service/local-storage-requests.js';
import { q } from './helpers.js';

/**
 * Changes the favourites status of a given GIF.
 * @param {string} gifId The ID of the GIF whose status will change.
 */
export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();
  const heartSpan = q(`button[data-gif-id="${gifId}"]`);
  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
    heartSpan.classList.remove('active');
    heartSpan.innerHTML = EMPTY_HEART;
  } else {
    addFavorite(gifId);
    heartSpan.classList.add('active');
    heartSpan.innerHTML = FULL_HEART;
  }
};

/**
 * Renders the favourite button according to the given GIF's status.
 * @param {string} gifId The ID of the GIF whose button will be rendered.
 * @return {string} HTML element as string
 */
export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId) ?
    `<button id="fav" class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</button>` :
    `<button id="fav" class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</button>`;
};

import {
  GIF_CONTAINER_SELECTOR,
  PAGE_TITLE_SELECTOR,
  RANDOM_CONTAINER_SELECTOR,
} from '../../common/constants.js';
import { toSingleGIFView } from './gif-view.js';

/**
 * Generates the HTML for the Favourites Category.
 * @param {array<string>} favorites
 * @param {object} randomGIF
 * @return {string}
 */
export const toFavoritesView = (favorites, randomGIF) => {
  if (favorites.length > 0) {
    return `<h2 class=${PAGE_TITLE_SELECTOR} >Your favorite GIFs:</h2>
      <div class=${GIF_CONTAINER_SELECTOR}>
      ${favorites.map(toSingleGIFView).join('\n')}
      </div>`;
  }

  return `<h2 class=${PAGE_TITLE_SELECTOR}>Like your first GIF!</h2>
    <div class=${RANDOM_CONTAINER_SELECTOR}>
    ${toSingleGIFView(randomGIF)}
    </div>`;
};

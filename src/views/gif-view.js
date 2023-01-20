import { GIF_IMG_SELECTOR, GIF_SELECTOR } from '../../common/constants.js';
import { renderFavoriteStatus } from '../events/fav-events.js';

/**
 * Generates the HTML for multiple GIFs.
 * @param {array<object>} GIFs
 * @return {string}
 */
export const toMultipleGIFsView = (GIFs) => `${GIFs.map(toSingleGIFView).join('')}`;

/**
 * Generates the HTML for a single GIF.
 * @param {object} GIF
 * @return {string}
 */
export const toSingleGIFView = (GIF) => `
  <div class="${GIF_SELECTOR}">
  <img class=${GIF_IMG_SELECTOR} src="${
  GIF.images.downsized.url ||
  GIF.images.fixed_height_downsampled.url ||
  GIF.images.fixed_width_downsampled.url ||
  GIF.images.original.url
}" data-gifId="${GIF.id}" ></img>
  <div class="details">
  <span class="title">Title: ${GIF.title}</span>
  <br>
   ${renderFavoriteStatus(GIF.id)}
  </div>
  </div>
`;

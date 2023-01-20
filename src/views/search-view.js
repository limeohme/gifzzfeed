import { GIF_CONTAINER_SELECTOR } from '../../common/constants.js';
import { toSingleGIFView } from './gif-view.js';

/**
 * Generates the HTML for the search results.
 * @param {object} GIFs
 * @return {string}
 */
export const toSearchView = (GIFs) => `
  <div class=${GIF_CONTAINER_SELECTOR}>
  ${GIFs.map(toSingleGIFView).join('\n') || '<p>No matching results found.</p>'}
  </div>
`;

/**
 * Generates the HTML for the search results from an autocomplete selection.
 * @param {object} suggestions
 * @return {string}
 */
export const autoCompleteView = (suggestions) => `${
  suggestions
    .map((el) => `<li class="suggestion" >${el.name}</li>`)
    .join(' ')
}`;

import { GIF_CONTAINER_SELECTOR } from '../../common/constants.js';
import { toMultipleGIFsView } from './gif-view.js';

/**
 * Generates the HTML for the Trending Category.
 * @param {array<object>} GIFs
 * @return {string}
 */
export const toTrendingView = (GIFs) => `<div class=${GIF_CONTAINER_SELECTOR}>
    ${toMultipleGIFsView(GIFs)}</div>`;

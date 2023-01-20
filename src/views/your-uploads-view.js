import {
  GIF_CONTAINER_SELECTOR,
  PAGE_TITLE_SELECTOR,
} from '../../common/constants.js';
import { toSingleGIFView } from './gif-view.js';

/**
 * Generates the HTML for the Your Uploads Category.
 * @param {array<object>} GIFs
 * @return {string}
 */
export const toYourUploadsView = (GIFs) => `${
  GIFs.length > 0
    ? `<h2 class=${PAGE_TITLE_SELECTOR} >Your uploaded GIFs:</h2>`
    : `<h2 class="toUpload">Upload your first GIF!</h2>`
}
<div class=${GIF_CONTAINER_SELECTOR}>
    ${GIFs.map(toSingleGIFView).join('\n')}
</div>`;

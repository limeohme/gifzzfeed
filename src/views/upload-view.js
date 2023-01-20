import { UPLOAD_CONTAINER_SELECTOR } from '../../common/constants.js';

/**
 * Generates the HTML for the Upload Category.
 * @return {string}
 */
export const toUploadPageView = () => `
   <br>
   <div class="${UPLOAD_CONTAINER_SELECTOR}">
   <h2 id="upload-description">UPLOAD YOUR OWN LOVELY GIFs ❤️</h2>
   <p>Upload a GIF, MP4, or MOV.</p>
   <label for="file-upload">📷 select file</label>
   <br>
   <input accept="image/gif,video/mp4,video/mov,video/quicktime,youtube,vimeo" type="file" id="file-upload">
   </div>
`;

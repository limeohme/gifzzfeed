import { uploadToGiphy } from '../request-service/api-requests.js';
import { uploadToLocalStorage } from '../request-service/local-storage-requests.js';

/**
 * Passes the input file object to the uploadToGiphy & uploadToLocalStorage functions
 * and calls the renderSuccessfulUpload function at the end.
 * @param {object} file
 */
export const uploadsHandler = async (file) => {
  try {
    const gifId = await uploadToGiphy(file);
    uploadToLocalStorage(gifId);
    renderSuccessfulUpload();
  } catch (error) {
    alert(error);
  }
};

/**
 * Writes a message that a file has been successfully uploaded
 * to the element with class upload-container.
 */
const renderSuccessfulUpload = () => {
  const successMessage = document.createElement('div');
  successMessage.setAttribute('id', 'success');
  successMessage.innerText = 'YAY, YOU SUCCESSFULLY UPLOADED A GIF!';
  document.querySelector('.upload-container').appendChild(successMessage);
};

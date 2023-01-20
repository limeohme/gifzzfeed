import { FAVORITES, YOUR_UPLOADS } from '../../common/constants.js';

let favorites = JSON.parse(localStorage.getItem(FAVORITES)) || [];
const uploads = JSON.parse(localStorage.getItem(YOUR_UPLOADS)) || [];
/**
 * Adds a GIF to favourites i.e. adds a GIF's ID to LocalStorage.
 * @param {string} gifId
 * @return {void}
 */
export const addFavorite = (gifId) => {
  if (favorites.find((id) => id === gifId)) {
    // Gif has already been added to favorites
    return;
  }

  favorites.push(gifId);
  localStorage.setItem(FAVORITES, JSON.stringify(favorites));
};

/**
 * Removes a GIF from favourites i.e. removes a GIF's ID from LocalStorage.
 * @param {string} gifId
 * @return {void}
 */
export const removeFavorite = (gifId) => {
  favorites = favorites.filter((id) => id !== gifId);
  localStorage.setItem(FAVORITES, JSON.stringify(favorites));
};

/**
 * Returns all favourites (IDs).
 * @return {array<string>}
 */
export const getFavorites = () => [...favorites];

/**
 * Uploads a GIF's ID to LocalStorage after it has been uploaded to Giphy.
 * @param {string} gifID
 * @return {void}
 */
export const uploadToLocalStorage = (gifID = '') => {
  if (uploads.includes(gifID)) {
    return;
  } else {
    uploads.push(gifID);
  }
  localStorage.setItem(YOUR_UPLOADS, JSON.stringify(uploads));
};

/**
 * Returns all uploads (IDs).
 * @return {array<string>}
 */
export const getYourUploads = () => [...uploads];

import { API_KEY_BN, API_KEY_LM } from '../../common/constants.js';

/**
 * Initializes the request to the Giphy API: Trending Endpoint and returns the fetched gif data.
 * @param {number} limit
 * @param {number} offset
 * @return {Promise<any>}
 */
export const loadTrendingGifs = async (limit = 20, offset = 0) => {
  const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY_LM}&limit=${limit}&offset=${offset}&rating=g`;
  const response = await fetch(API_URL);
  // handle 404
  if (!response.ok) {
    alert(`An error occurred: ${response.status}`);
  }
  return response.json();
};

/**
 *  Initializes the request to the Giphy API: Get By ID Endpoint and returns the fetched gif data.
 * @param {string} id
 * @return {Promise<any>}
 */
export const loadGifByID = async (id) => {
  const API_URL = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY_LM}`;
  const response = await fetch(API_URL);
  // handle 404
  if (!response.ok) {
    alert(`An error occurred: ${response.status}`);
  }
  return response.json();
};

/**
 *  Initializes the request to the Giphy API: Get By IDs Endpoint and returns the fetched gif data.
 * @param {string} ids
 * @return {Promise<any>}
 */
export const loadGIFsById = async (ids) => {
  const API_URL = `https://api.giphy.com/v1/gifs?api_key=${API_KEY_BN}&ids=${ids}`;

  const response = await fetch(API_URL);
  // handle 404
  if (!response.ok) {
    alert(`An error occurred: ${response.status}`);
  }
  return response.json();
};

/**
 * Initializes the request to the Giphy API: Search Endpoint and returns the fetched gif data.
 * @param {string} searchTerm
 * @return {object}
 */
export const loadSearchGIFs = async (searchTerm) => {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY_BN}&q=${searchTerm}&limit=20&rating=g`;
  const response = await fetch(API_URL);
  // handle 404
  if (!response.ok) {
    alert(`An error occurred: ${response.status}`);
  }

  const searchedGIFs = await response.json();
  return searchedGIFs.data;
};

/**
 * Initializes the request to the Giphy API: Search Endpoint and returns the fetched gif data.
 * @param {string} searchTerm
 * @return {object}
 */
export const loadSearchSuggestions = async (searchTerm) => {
  const API_URL = `https://api.giphy.com/v1/gifs/search/tags?api_key=${API_KEY_BN}&q=${searchTerm}&limit=5`;
  const response = await fetch(API_URL);
  // handle 404
  if (!response.ok) {
    alert(`An error occurred: ${response.status}`);
  }
  const searchedSuggestions = await response.json();
  return searchedSuggestions.data;
};

/**
 * Creates a new form data object for the given file and
 * initializes the request to the Giphy API: Upload Endpoint.
 * Returns the uploaded GIF's id.
 * @param {object} file
 * @return {string}
 */
export const uploadToGiphy = async (file) => {
  const formData = new FormData();
  formData.append('api_key', API_KEY_LM);
  formData.append('username', '');
  formData.append('file', file);

  let data = await fetch('https://upload.giphy.com/v1/gifs', {
    method: 'POST',
    body: formData,
  });
  data = await data.json();
  return data.data.id;
};

/**
 * Initializes the request to the Giphy API: Random Endpoint and returns the fetched gif data.
 * @return {Promise<any>}
 */
export const getRandomGif = async () => {
  const API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY_BN}&rating=g`;
  const response = await fetch(API_URL);
  // handle 404
  if (!response.ok) {
    alert(`An error occurred: ${response.status}`);
  }
  return response.json();
};

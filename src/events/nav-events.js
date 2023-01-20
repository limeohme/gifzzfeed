import {
  CONTAINER_SELECTOR,
  FAVORITES,
  GIF_CONTAINER_SELECTOR,
  LOGO,
  TRENDING,
  UPLOAD,
  YOUR_UPLOADS,
} from '../../common/constants.js';
import {
  getRandomGif,
  loadGIFsById,
  loadTrendingGifs,
} from '../request-service/api-requests.js';
import { toTrendingView } from '../views/trending-view.js';
import { toUploadPageView } from '../views/upload-view.js';
import { q, setActiveNav } from './helpers.js';
import {
  getFavorites,
  getYourUploads,
} from '../request-service/local-storage-requests.js';
import { toFavoritesView } from '../views/favourites-view.js';
import { toYourUploadsView } from '../views/your-uploads-view.js';
import { hideSuggestions, setSearchBarInnerHTML } from './search-events.js';
import { toHomeView } from '../views/home-view.js';
import { toMultipleGIFsView } from '../views/gif-view.js';

/**
 * Calls the appropriate render function according to the click event on the page.
 * @param {string} page
 */
export const loadPage = async (page = '') => {
  cleanUp();
  if (page === TRENDING) {
    setActiveNav(page);
    await renderTrending();
  } else if (page === FAVORITES) {
    setActiveNav(page);
    await renderFavorites();
  } else if (page === UPLOAD) {
    setActiveNav(page);
    renderUpload();
  } else if (page === YOUR_UPLOADS) {
    setActiveNav(page);
    await renderYourUploads();
  }
};

/**
 * Changes the DOM to show the Trending GIFs.
 */
const renderTrending = async () => {
  try {
    const trendGifs = await loadTrendingGifs();
    document.getElementById(CONTAINER_SELECTOR).innerHTML = toTrendingView(
      trendGifs.data,
    );
  } catch (error) {
    alert(error);
  }
};

/**
 * Changes the DOM to show the Upload Section.
 */
const renderUpload = () => {
  document.getElementById(CONTAINER_SELECTOR).innerHTML = toUploadPageView();
};

/**
 * Changes the DOM to show the GIFs marked as favourite.
 */
const renderFavorites = async () => {
  try {
    const favoritesIds = getFavorites().join(',');
    const favorites = favoritesIds
      ? await loadGIFsById(favoritesIds)
      : { data: [] };
    const randomGif = await getRandomGif();

    document.getElementById(CONTAINER_SELECTOR).innerHTML = toFavoritesView(
      favorites.data,
      randomGif.data,
    );
  } catch (error) {
    alert(error);
  }
};

/**
 * Changes the DOM to show the uploaded GIFs.
 */
export const renderYourUploads = async () => {
  const idsStr = getYourUploads().join(',');
  const GIFs = idsStr !== '' ? await loadGIFsById(idsStr) : { data: [] };
  document.getElementById(CONTAINER_SELECTOR).innerHTML = toYourUploadsView(
    GIFs.data,
  );
};

/**
 * Changes the DOM to show the additional Trending GIFs according to the scroll event.
 * @param {number} limit
 * @param {number} offset
 */
export const renderAdditionalTrending = async (limit, offset) => {
  const moreTrendingGifs = await loadTrendingGifs(limit, offset);

  q(`.${GIF_CONTAINER_SELECTOR}`).innerHTML += toMultipleGIFsView(
    moreTrendingGifs.data,
  );
};

/**
 * Changes the DOM to show the Home Page.
 */
export const renderHomePage = async () => {
  cleanUp();
  try {
    setActiveNav();
    const randomGif = await getRandomGif();
    const gifURL = randomGif.data.images.original.url;
    document.body.style.backgroundImage = `url(${gifURL})`;
    document.getElementById(CONTAINER_SELECTOR).innerHTML = toHomeView();
  } catch (error) {
    alert(error);
  }
};

/**
 * Clears unwanted artefacts on the page left from previous changes.
 */
const cleanUp = () => {
  document.body.style.backgroundImage = 'none';
  q(LOGO).classList.remove('active');
  hideSuggestions();
  setSearchBarInnerHTML();
};

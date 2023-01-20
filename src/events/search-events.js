import {
  AUTOCOMPLETE_SELECTOR,
  CONTAINER_SELECTOR,
  SEARCH_SELECTOR,
} from '../../common/constants.js';
import {
  loadSearchGIFs,
  loadSearchSuggestions,
} from '../request-service/api-requests.js';
import { autoCompleteView, toSearchView } from '../views/search-view.js';

/**
 * Passes the search query term to the loadSearchGIFS function and
 * writes the returned result to the DOM.
 * @param {string} searchTerm
 */
export const renderSearchItems = async (searchTerm) => {
  const searched = await loadSearchGIFs(searchTerm);
  document.getElementById(CONTAINER_SELECTOR).innerHTML = toSearchView(
    searched,
    searchTerm,
  );
};

/**
 * Passes the search query term to the loadSearchSuggestions function and
 * writes the returned suggestions to the DOM.
 * @param {string} searchTerm
 */
export const renderSearchSuggestion = async (searchTerm) => {
  const suggestions = await loadSearchSuggestions(searchTerm);
  document.getElementById(AUTOCOMPLETE_SELECTOR).innerHTML =
    autoCompleteView(suggestions);
};

/**
 * Writes a given text to the search bar element.
 * OR
 * Clears the search bar if no searchTerm is passed.
 * @param {string} searchTerm
 */
export const setSearchBarInnerHTML = (searchTerm = '') => {
  document.getElementById(SEARCH_SELECTOR).value = searchTerm;
};

/**
 * Removes the generated suggestions from the autocomplete
 * element after they're no longer needed.
 */
export const hideSuggestions = () => {
  document.getElementById(AUTOCOMPLETE_SELECTOR).innerText = '';
};

import {
  CONTAINER_SELECTOR,
  ENTER_KEY,
  LOGO,
  UPLOAD,
} from '../common/constants.js';
import { toggleFavoriteStatus } from './events/fav-events.js';
import { debounce, q, qs, setActiveNav } from './events/helpers.js';
import {
  loadPage,
  renderAdditionalTrending,
  renderHomePage,
} from './events/nav-events.js';
import {
  hideSuggestions,
  renderSearchItems,
  renderSearchSuggestion,
  setSearchBarInnerHTML,
} from './events/search-events.js';
import { changeThemes } from './events/theme-events.js';
import { uploadsHandler } from './events/upload-events.js';

document.addEventListener('DOMContentLoaded', async () => {
  let offsetTrending = 0;
  const limit = 20;

  document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('nav-link')) {
      await loadPage(event.target.getAttribute('data-target-page'));
    }

    if (event.target.classList.contains('logo')) {
      await renderHomePage();
      event.target.classList.add('active');
    }

    if (event.target.classList.contains('theme')) {
      changeThemes();
    }

    if (event.target.classList.contains('suggestion')) {
      document.body.style.backgroundImage = 'none';
      renderSearchItems(event.target.innerHTML);
      // setSearchBarInnerHTML(event.target.innerHTML);
      setSearchBarInnerHTML();
      hideSuggestions();
      q('input#search').focus();
    }

    if (event.target.classList.contains('toUpload')) {
      console.log('in nav');
      console.log(event.target);
      await loadPage(UPLOAD);
    }

    // toggle favorite event
    if (event.target.classList.contains('favorite')) {
      toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
    }
  });

  document.addEventListener('change', (event) => {
    if (event.target.id === 'file-upload') {
      const file = document.getElementById('file-upload').files[0];
      uploadsHandler(file);
    }
  });

  // search events
  q('input#search').addEventListener('keypress', (event) => {
    setActiveNav();
    // q(`#${CONTAINER_SELECTOR}`).innerHTML = '';

    if (event.key === ENTER_KEY) {
      document.body.style.backgroundImage = 'none';
      // hideSuggestions();
      renderSearchItems(event.target.value);

      hideSuggestions();
      setSearchBarInnerHTML();
    }
  });

  // search suggestions
  q('input#search').addEventListener('keyup', (event) => {
    renderSearchSuggestion(event.target.value);
  });

  setSearchBarInnerHTML;
  document.body.addEventListener('click', () => {
    hideSuggestions();
    setSearchBarInnerHTML();
  });

  // load landing
  await renderHomePage();

  // infinite scroll on trending
  window.onscroll = debounce(async function () {
    const isActive = document
      .querySelector('[data-target-page="trending"]')
      .classList.contains('active');
    const isPageEnd =
    window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (isActive && isPageEnd && !q(LOGO).classList.contains('active')) {
      try {
        offsetTrending += limit;
        if (offsetTrending === 4999) offsetTrending = 0;
        renderAdditionalTrending(limit, offsetTrending);
      } catch (error) {
        alert(error);
      }
    }
  }, 600);

  window.ontouchmove = () => {
    const isActive = document
      .querySelector('[data-target-page="trending"]')
      .classList.contains('active');
    const isPageEnd =
    window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (isActive && isPageEnd && !q(LOGO).classList.contains('active')) {
      try {
        offsetTrending += limit;
        if (offsetTrending === 4999) offsetTrending = 0;
        renderAdditionalTrending(limit, offsetTrending);
      } catch (error) {
        alert(error);
      }
    }
  }
});

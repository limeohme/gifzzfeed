import { q } from './helpers.js';

/**
 * Toggles the dark & light UI themes of the page.
 */
export const changeThemes = () => {
  const body = document.querySelector('body');
  const fade = document.querySelector('.fade');

  body.style.transition = 'background-color 1.5s ease-out';
  fade.style.transition = 'background-image 10s ease-out';

  if (body.classList.contains('darkMode')) {
    q('.theme-icon').innerText = '🌙';
  } else {
    q('.theme-icon').innerText = '🌞';
  }

  body.classList.toggle('darkMode');
  body.classList.toggle('whiteMode');
};

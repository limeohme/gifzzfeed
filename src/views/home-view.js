import { HOME_CONTAINER_SELECTOR, ABOUT_INFO } from '../../common/constants.js';

/**
 * Generates the HTML for the landing page.
 * @return {string}
 */
export const toHomeView = () => `
    <div class="${HOME_CONTAINER_SELECTOR}">
    <div class=${ABOUT_INFO}>powered by:<br><br>GIPHY<br><br>created by:<br><br>Boris Netsov<br>Liya Milenkova<br>Martin Shukadarov</div></div>
`;

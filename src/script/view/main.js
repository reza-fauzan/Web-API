import '../component/club-list.js';
import '../component/app-header.js'
import '../component/app-hero.js';
import '../component/app-footer.js'
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('app-hero');
  const clubListElement = document.querySelector('club-list');
 
  const onButtonSearchClicked = () => {
    DataSource.searchClub(searchElement.value).then(renderResult).catch(fallbackResult);
  };
 
  const renderResult = results => {
    clubListElement.clubs = results;
  };
 
  const fallbackResult = message => {
    clubListElement.renderError(message);
  };
 
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
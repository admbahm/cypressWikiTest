import { mainPage } from '../../support/page_objects/mainPage';
import { searchResultsPage } from '../../support/page_objects/searchResultsPage';

describe('Wikipedia Main Page', () => {
  beforeEach(() => {
    mainPage.visit();
  });

  it('should search for a query', () => {
    mainPage.searchFor('Selenium (software)');
    searchResultsPage.getTitle().should('eq', 'Selenium (software) - Wikipedia');
  });
});

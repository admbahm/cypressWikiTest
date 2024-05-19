class SearchResultsPage {
    getTitle() {
      return cy.title();
    }
  }
  
  export const searchResultsPage = new SearchResultsPage();
  
class MainPage {
    visit() {
      cy.visit('/');
    }
  
    searchFor(query) {
      cy.get('#searchInput').type(query);
      cy.get('button[type="submit"]').click();
    }
  }
  
  export const mainPage = new MainPage();
  
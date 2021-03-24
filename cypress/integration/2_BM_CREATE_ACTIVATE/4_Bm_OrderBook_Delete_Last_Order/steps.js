import {
  Given,
  When,
  Before,
  Then,
  And
} from "cypress-cucumber-preprocessor/steps";


And (`I select the {string} portfolio`, portfolio => {
  cy.get('[data-cy="cypress-nexweb-component-portfolioId"] input')
    .type("{selectall}")
    .type(portfolio)
    .type("{enter}");
})



And("I press the Search button", () => {
  cy.get(":nth-child(2) > nexweb-button > span > .button-padded").click({
    force: true
  });
})



 Then  (`I must see {string} area orders` , portfolio => {
   cy.wait(1000)
   cy.get('[data-cy=cypress-nexweb-column-portfolio]').should('contain',portfolio)
  );

      

// When  I select the last entered order (bottom) and I delete it
 When  ("I select the last entered order and I delete it" , () => {

  // click elipsis of bottom left order in the grid (last order)
         cy.get('[data-kendo-grid-item-index]:last-child > [data-kendo-grid-column-index]:first-child  path').click()  

  // click on menu item , which will be Delete Order, pop up the quanity form
  cy.get(".mat-menu-item")
    .contains("Delete Order")
    .click();

  // confirm the delete
  cy.get('[ng-reflect-title^="Delete"] > span > .button-padded').click(); // not regular expression in selector to denote ^ start with
 })




// log that all is complete
And("I have deleted an order", () => {
   cy.log("last order on grid has been deleted")
})


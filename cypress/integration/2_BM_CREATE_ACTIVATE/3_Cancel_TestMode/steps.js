import {
  Given,
  When,
  Before,
  Then,
  And
} from "cypress-cucumber-preprocessor/steps";

And(`I navigate to the Test Mode Parameter and disable TestMode`, () => {
  cy.get(
    '[kendotreeviewitem=""][data-treeindex="4"] > .k-mid > .k-icon'
  ).click();
  cy.get(".ng-trigger > .k-item > .k-mid > .k-icon").click();

  // select the Test Mode  from drop down list
  cy.get('.k-in[data-treeindex="4_0_2"]').click();

  // get botom right
  cy.get(
    '[data-kendo-grid-item-index]:last-child > [data-kendo-grid-column-index]:last-child  [data-cy="cypress-nexweb-column-displayValue"]:not(:has([data-cy="cypress-nexweb-column-displayValue"]))'
  ).then($cell_content => {
    // cllick the pen edit
    cy.get(
      '[data-kendo-grid-item-index]:last-child > [data-kendo-grid-column-index]:first-child  [data-cy="cypress-nexweb-button-edit"]:last-child'
    ).click();

    // log the content that cell
    cy.log(`cell_content.text() is:${$cell_content.text()}`);

    if ($cell_content.text().includes("Yes")) {
      cy.get("[data-cy=cypress-nexweb-component-displayValue]").check({
        force: true
      }); // check the checkbox
      cy.get(
        "[data-cy=cypress-nexweb-button-save] > span > .button-padded"
      ).click({ force: true }); // save the result
    } else {
      cy.get(
        "[data-cy=cypress-nexweb-button-cancel] > span > .button-padded"
      ).click();
    }
  });

  cy.log("Test Mode is now set to 'No'");
});

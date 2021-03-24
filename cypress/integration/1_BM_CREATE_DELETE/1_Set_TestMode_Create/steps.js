import {
  Given,
  When,
  Before,
  Then,
  And
} from "cypress-cucumber-preprocessor/steps";

And(`I navigate to the Test Mode Parameter and enable TestMode`, () => {
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

    if ($cell_content.text().includes("No")) {
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

  cy.log("Test Mode is now set to 'Yes'");
});

And(
  `Tree is already open so I navigate to the Test Mode Date and set to {string}`,
  testDate => {
    // tree is already open
    cy.get('.k-in[data-treeindex="4_0_3"]').click(); // select the Test Mode Date from drop down list

    // get botom right
    cy.get(
      '[data-kendo-grid-item-index]:last-child > [data-kendo-grid-column-index]:last-child  [data-cy="cypress-nexweb-column-displayValue"]'
    ).then($cell_content => {
      // cllick the pen edit
      cy.get(
        '[data-kendo-grid-item-index]:last-child > [data-kendo-grid-column-index]:first-child  [data-cy="cypress-nexweb-button-edit"]'
      ).click();

      // log the content that cell
      cy.log(`cell_content.text() is:${$cell_content.text()}`);


      if (!$cell_content.text().includes(testDate)) {

         const testDateType = testDate.replace(/[ \/]/g,'')  // replace any slashes or spaces with nothing
        // type new value and submit
        cy.get(
          ":nth-child(2) > nexweb-edit-component > .k-container-full > .k-input-full > .k-picker-wrap > kendo-dateinput > .k-dateinput-wrap > input "
        )
          .type("{selectall}")
          .type(testTimeType, { force: true }); // type in the date no slashes and submits
        cy.get(
          "[data-cy=cypress-nexweb-button-save] > span > .button-padded"
        ).click();
      } else {
        // cancel
        cy.get(
          "[data-cy=cypress-nexweb-button-cancel] > span > .button-padded"
        ).click();
      }
    });

    cy.log(`Test Mode Date is now set to ${  testDate}`);

);

And(
  `Tree is already open so I navigate to the Test Mode Time and set to {string}`,
  testTime => {
    // tree is already open
    cy.get('.k-in[data-treeindex="4_0_4"]').click(); // select the Test Mode Date from drop down list

    // get botom right
    cy.get(
      '[data-kendo-grid-item-index]:last-child > [data-kendo-grid-column-index]:last-child  [data-cy="cypress-nexweb-column-displayValue"]'
    ).then($cell_content => {
      // cllick the pen edit
      cy.get(
        '[data-kendo-grid-item-index]:last-child > [data-kendo-grid-column-index]:first-child  [data-cy="cypress-nexweb-button-edit"]'
      ).click();

      // log the content that cell
      cy.log(`cell_content.text() is:${$cell_content.text()}`);


      if (!$cell_content.text().includes(testTime)) {
        let testTimeType = testTime.replace(/[ :]/g, ""); // replace any spaces or colons with nothing
        // type new value and submit
        cy.get(
          ":nth-child(2) > nexweb-edit-component > .k-container-full > .k-input-full > .k-picker-wrap > kendo-dateinput > .k-dateinput-wrap > input "
        )
          .type("{selectall}")
          .type(testTimeType, { force: true }); // type in the date no slashes and submits
        cy.get(
          "[data-cy=cypress-nexweb-button-save] > span > .button-padded"
        ).click();
      } else {
        // cancel
        cy.get(
          "[data-cy=cypress-nexweb-button-cancel] > span > .button-padded"
        ).click();
      }
    });

    cy.log(`Test Mode Time is now set to ${testTime}`);
  }
);

import {
  Given,
  When,
  Before,
  Then,
  And
} from "cypress-cucumber-preprocessor/steps";

// const SITE = 'https://qa2.sappmtp.com/'
const SITE = "http://172.22.14.100:8085/";
// const SITE =  'localhost:4200/'

Given(`That I login as {string}`, username => {
  cy.log(`const SITE has been set to : ${SITE}`);

  cy.visit(`${SITE}account/logout`);
  // cy.wait(5000)
  cy.visit(`${SITE}account/login`);
  // cy.wait(5000)

  // synchronously ask for the body's text
  // and do something based on whether it includes
  // another string

  // yup found a login page, so do login
  cy.get("#login-input-user-name-or-email-address").type(username);
  cy.get("#login-input-password").type("1q2w3E*");
  cy.get("form").submit();
  cy.wait(10000);
});

When("I open the Balancing Market page", () => {
  cy.visit(
    `${SITE}nav-balancing-market/bm/order-book-X-order-book-component-X-52`
  );
  cy.wait(10000);
});

When("I open the Application Parameters page", () => {
  cy.visit(
    `${SITE}nav-configuration/nav-solution-parameters/samm/application-parameters-X-application-parameter-value-component-X-88`
  );
  cy.wait(10000);
});

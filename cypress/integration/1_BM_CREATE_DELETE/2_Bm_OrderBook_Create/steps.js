import {
  Given,
  When,
  Before,
  Then,
  And
} from "cypress-cucumber-preprocessor/steps";

And(`I select the {string} portfolio`, portfolio => {
  cy.get('[data-cy="cypress-nexweb-component-portfolioId"] input')
    .type("{selectall}")
    .type(portfolio)
    .type("{enter}");
});

And("I press the Search button", () => {
  cy.get(":nth-child(2) > nexweb-button > span > .button-padded").click({
    force: true
  });
});

Then(`I must see {string} area orders`, portfolio => {
  cy.wait(1000);
  cy.get("[data-cy=cypress-nexweb-column-portfolio]").should(
    "contain",
    portfolio
  );
});

When(
  `I enter orders of QTY:q_field  MINQ:minq_field  MULP: mulp_field X AreaPrice`,
  datatable => {
    datatable.hashes().forEach(element => {
      const quantity = element.q_field;
      const minActivationQuantity = element.minq_field;
      const orderPriceMultiplier = element.mulp_field;

      // click elipsis of top left order in the grid (first order)
      cy.get(
        "[data-kendo-grid-item-index]:first-child > [data-kendo-grid-column-index]:first-child  path"
      ).click();

      // click first menu item , which will be Enter Order, pop up the quanity form
      cy.get("[data-cy=cypress-nexweb-button-menuitem0]")
        .contains("Enter Order")
        .click();

      // get the damArea price, multiply it, then load it to the form
      cy.get('[data-cy="cypress-nexweb-component-damAreaPrice"]')
        .invoke("val")
        .then(text => {
          // read the damPrice, make a up and a down, 10% higher
          cy.log(`orderPriceMultiplier:${orderPriceMultiplier} text:${text}`);
          const upOrderPrice = Math.round(
            orderPriceMultiplier * parseInt(text)
          );
          cy.log(`Up order price will be:${upOrderPrice}`);
          cy.get('[data-cy="cypress-nexweb-component-orderPrice"]').type(
            upOrderPrice
          );
        });

      // enter quantity
      cy.get('[data-cy="cypress-nexweb-component-quantity"]').type(quantity);

      // switch the flexible switch
      cy.get('[data-cy="cypress-nexweb-component-isFlexible"]').click();

      // enter min activation quality
      cy.get('[data-cy="cypress-nexweb-component-minActivationQuantity"]').type(
        minActivationQuantity
      );

      // Press the up or down button, depends on multipler
      if (orderPriceMultiplier > 1.0) {
        cy.get('nexweb-button .button-padded:contains("Up")').click();
      } else {
        cy.get('nexweb-button .button-padded:contains("Down")').click();
      }

      cy.log(
        `Order  quantity:${quantity} minActivationQuantity:${minActivationQuantity} orderAreaPriceMultiplier:${orderPriceMultiplier} has been submitted`
      );
    });
  }
);

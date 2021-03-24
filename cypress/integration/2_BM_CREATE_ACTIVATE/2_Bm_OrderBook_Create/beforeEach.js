beforeEach(() => {
  /*
  cy.wait(5000)
  cy.get('body').then(($body) => {
      // synchronously ask for the body's text
      // and do something based on whether it includes
      // another string
      if ($body.text().includes('Login')) {
        // yup found a login page, so do login

        cy.get('#login-input-user-name-or-email-address').type('david@eskom')
        cy.get('#login-input-password').type('1q2w3E*')
        cy.get('form').submit()
        cy.wait(5000)

      } else {
        // already logged in so go home
        cy.visit('https://qa2.sappmtp.com/')
      }
  })
  */
  cy.log("This is local before each feature is checked");

  // make sure to log out from anywhere, and then login
});

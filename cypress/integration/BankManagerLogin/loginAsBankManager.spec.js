///<reference types="cypress"/>

Given("I navigate to the Website", () => {
  cy.visit(
    "https://www.way2automation.com/angularjs-protractor/banking/#/login"
  );
});

When("I click on Bank Manager Login Button", () => {
  cy.get(":nth-child(3) > .btn").click();
});

And("Validate the page title", () => {
  cy.title().should("eq", "Protractor practice website - Banking App");
});

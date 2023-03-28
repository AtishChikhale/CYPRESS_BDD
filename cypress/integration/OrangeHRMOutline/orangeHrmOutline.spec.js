import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("User navigate to ornageHRM URL", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});

When(
  "User enter userName {string} and passWord {string}",
  (userName, passWord) => {
    cy.get("input[placeholder='Username']").type(userName);
    cy.get("input[placeholder='Password']").type(passWord);
  }
);

And('tap on "Login" button', () => {
  cy.get("button[type='submit']").click();
});

Then("user should see navigating {string}", (tab) => {
  cy.contains(tab).should("be.visible");
});

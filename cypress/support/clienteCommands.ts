import 'cypress-real-events';

/**
 * Equivalente a:
 * cy.visit('/desafioqa/incluirCliente');
 */
Cypress.Commands.add('acessaPaginaDeIncluirCliente', () => {
  // Mouse em cima de "QA <3"
  cy.get('[title="QA"]').parent().realHover();

  // Mouse em cima de "Clientes"
  cy.get(
    ':nth-child(1) > :nth-child(2) > :nth-child(1) > [href="#"]'
  ).realHover();

  // Click em "+ Incluir"
  cy.get(
    ':nth-child(1) > :nth-child(2) > :nth-child(1) > ul > :nth-child(1) > a'
  ).click();
});

Cypress.Commands.add('acessaPaginaInicial', () => {
  cy.get('[title="Inicio"]').parent().click();
});

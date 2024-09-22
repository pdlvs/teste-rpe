import 'cypress-real-events';

/**
 * Equivalente a:
 * cy.visit('/desafioqa/incluirCliente');
 */
Cypress.Commands.add('acessaPaginaDeIncluirTransacao', () => {
  // Mouse em cima de "QA <3"
  cy.get('[title="QA"]').parent().realHover();

  // Mouse em cima de "Transações"
  cy.get(':nth-child(2) > [href="#"]').realHover();

  // Click em "+ Incluir"
  cy.get(':nth-child(2) > :nth-child(2) > ul > :nth-child(1) > a').click();
});

Cypress.Commands.add('acessaPaginaDeListarVenda', () => {
  // Mouse em cima de "QA <3"
  cy.get('[title="QA"]').parent().realHover();

  // Mouse em cima de "Transações"
  cy.get(':nth-child(2) > [href="#"]').realHover();

  // Click em "= Listar"
  cy.get(':nth-child(2) > ul > :nth-child(2) > a').click();
});

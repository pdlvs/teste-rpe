import 'cypress-real-events';

import { usuario, senha, usuarioInvalido, senhaInvalida } from './envs';

Cypress.Commands.add('acessaPaginaDeLogin', () => {
  cy.visit('/desafioqa/login');
  cy.get('input[name="username"]').type(usuario);
  cy.get('input[name="password"]').type(senha);
  cy.get('button[type="submit"]').click();
  cy.contains('Bem vindo ao Desafio').should('be.visible');
  cy.url().should('include', '/inicio');
});

Cypress.Commands.add('acessaPaginaDeLoginCredencialInvalida', () => {
  cy.visit('/desafioqa/login');
  cy.get('input[name="username"]').type(usuarioInvalido);
  cy.get('input[name="password"]').type(senhaInvalida);
  cy.get('button[type="submit"]').click();
  cy.contains('Credenciais inválidas').should('be.visible');
});

Cypress.Commands.add('limparBase', () => {
  cy.visit('/desafioqa/listarCliente');
  cy.get('input[type="submit"]').contains('Limpar Base').click();
});

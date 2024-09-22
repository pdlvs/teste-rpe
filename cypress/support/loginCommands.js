const usuario = Cypress.env('username');
const senha = Cypress.env('password');
const usuarioErro = Cypress.env('usernameInvalido');
const senhaErro = Cypress.env('passwordInvalida')

Cypress.Commands.add('acessaPaginadeLogin', () => {
    cy.visit('http://provaqa.prc.rpe.tech:9080/desafioqa/login');
    cy.get('input[name="username"]').type(usuario);
    cy.get('input[name="password"]').type(senha);
    cy.get('button[type="submit"]').click();
    cy.contains('Bem vindo ao Desafio').should('be.visible');
    cy.url().should('include', '/inicio');
})

Cypress.Commands.add('acessaPaginadeLoginCredencialInvalida', () => {
    cy.visit('http://provaqa.prc.rpe.tech:9080/desafioqa/login');
    cy.get('input[name="username"]').type(usuarioErro);
    cy.get('input[name="password"]').type(senhaErro);
    cy.get('button[type="submit"]').click();
    cy.contains('Credenciais inválidas').should('be.visible');
});

Cypress.Commands.add('limparBase', () => {
    cy.visit('http://provaqa.prc.rpe.tech:9080/desafioqa/listarCliente');
    cy.get('input[type="submit"]').contains('Limpar Base').click()
})
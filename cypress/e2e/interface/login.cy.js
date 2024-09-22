///<reference types="cypress"/>

describe('Acessa página de login', () => {
    it('Login com usuário e senha inválidas', () => {
        cy.acessaPaginadeLoginCredencialInvalida();
    })

    it('Login com usuário e senha válidas', () => {
        cy.acessaPaginadeLogin();
    });

});
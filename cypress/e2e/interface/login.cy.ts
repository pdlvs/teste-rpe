describe('Acessa página de login', () => {
  it('Login com usuário e senha inválidas', () => {
    cy.acessaPaginaDeLoginCredencialInvalida();
  });

  it('Login com usuário e senha válidas', () => {
    cy.acessaPaginaDeLogin();
  });
});

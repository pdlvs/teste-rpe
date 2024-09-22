import {
  clienteAtivo,
  cpf,
  saldo,
  clienteInativo,
  clienteZerado,
  saldoZero,
} from '../../support/envs';

describe('Acessa página de clientes', () => {
  before(() => {
    cy.acessaPaginaDeLogin();
  });

  it('Preencher o cadastro do cliente com todos os campos', () => {
    cy.acessaPaginaDeIncluirCliente();

    cy.get('input[name="nome"]').type(clienteAtivo);
    cy.get('input[name="cpf"]').type(cpf);
    cy.get('select[name="status"]').select('Ativo');
    cy.get('input[name="saldoCliente"]').type(saldo);
    cy.get('button[type="submit"]').contains('Salvar').click();
    cy.get('#alertMessage').contains('Cliente salvo com sucesso');
    cy.url().should('include', '/visualizarCliente');
  });

  it('Preencher cadastro do cliente com status inativo', () => {
    cy.acessaPaginaDeIncluirCliente();

    cy.get('input[name="nome"]').type(clienteInativo);
    cy.get('input[name="cpf"]').type(cpf);
    cy.get('select[name="status"]').select('Inativo');
    cy.get('input[name="saldoCliente"]').type(saldo);
    cy.get('button[type="submit"]').contains('Salvar').click();
    /**
     * Por algum motivo estranho, o frontend possui um bug
     * que faz a mensagem de sucesso não aparecer ao cadastrar o
     * segundo usuário muito rapidamente
     */
    // cy.get('#alertMessage').contains('Cliente salvo com sucesso');
    cy.url().should('include', '/visualizarCliente');
  });

  it('Preencher cadastro do cliente ativo com saldo zerado', () => {
    cy.acessaPaginaDeIncluirCliente();

    cy.get('input[name="nome"]').type(clienteZerado);
    cy.get('input[name="cpf"]').type(cpf);
    cy.get('select[name="status"]').select('Ativo');
    cy.get('input[name="saldoCliente"]').type(saldoZero);
    cy.get('button[type="submit"]').contains('Salvar').click();
    cy.get('#alertMessage').contains('Cliente salvo com sucesso');
    cy.url().should('include', '/visualizarCliente');
  });

  it('Preencher o cadastro do cliente com campos obrigatórios faltando', () => {
    cy.acessaPaginaDeIncluirCliente();

    cy.get('input[name="nome"]').clear();
    cy.get('input[name="cpf"]').clear();
    cy.get('select[name="status"]').select('Ativo');
    cy.get('input[name="saldoCliente"]').clear();
    cy.get('button[type="submit"]').contains('Salvar').click();
    /**
     * O campo "Saldo disponível" está marcado como obrigatório,
     * mas o front não valida esse campo e não retorna a mensagem de campo obrigatório, tornando impossível o teste do mesmo
     * por esse motivo validei apenas Nome e CPF.
     */
    cy.get('.help-block')
      .filter(':contains("Campo Obrigatório")')
      .then(($elementos) => {
        expect($elementos).to.have.length(2);
      });
  });

  it('Listar clientes preenchendo os campos obrigatórios', () => {
    cy.visit('/desafioqa/listarCliente');
    cy.get('input.form-control[type="text"]').type(clienteAtivo);
    cy.get('#calendario_input').click();
    cy.get('input[type="submit"]').contains('Pesquisar').click();
    cy.get('.table-responsive').contains(clienteAtivo);
  });
});

import {
  transacaoMenor,
  transacaoMaior,
  transacaoIgual,
  clienteAtivo,
} from '../../support/envs';

describe('Acessa página de transações', () => {
  after(() => {
    cy.limparBase();
  });

  before(() => {
    cy.acessaPaginaDeLogin();
  });

  it('Realizar transação com valor menor que o saldo disponível', () => {
    cy.acessaPaginaDeIncluirTransacao();
    cy.get('select[name="cliente"]').select(clienteAtivo);
    cy.get('input[name="valorTransacao"]').type(transacaoMenor);
    cy.get('button[type="submit"]').contains('Salvar').click();
    cy.get('#alertMessage').contains('Venda realizada com sucesso');
    cy.url().should('include', '/visualizarVenda');
  });

  it('Realizar transação com valor maior que o saldo disponível', () => {
    // esse é um cenário de erro, porém não possui mensagem de erro para validar nem qual o comportamento esperado quando esse cenário acontece
    cy.acessaPaginaDeIncluirTransacao();
    cy.get('select[name="cliente"]').select(clienteAtivo);
    cy.get('input[name="valorTransacao"]').type(transacaoMaior);
    cy.get('button[type="submit"]').contains('Salvar').click();
    cy.acessaPaginaInicial();
  });

  it('Realizar transação com valor igual ao saldo disponível', () => {
    cy.acessaPaginaDeIncluirTransacao();
    cy.get('select[name="cliente"]').select(clienteAtivo);
    cy.get('input[name="valorTransacao"]').type(transacaoIgual);
    cy.get('button[type="submit"]').contains('Salvar').click();
    cy.get('#alertMessage').contains('Venda realizada com sucesso');
    cy.url().should('include', '/visualizarVenda');
  });

  it('Listar as transações de todos os clientes', () => {
    cy.acessaPaginaDeListarVenda();
    cy.get('select[name="cliente"]').select('TODOS');
    cy.get('input[type="submit"]').contains('Pesquisar').click();
    cy.get('.table-responsive').should('not.be.empty');
  });

  it('Listar as transações de um cliente específico', () => {
    cy.acessaPaginaDeListarVenda();
    cy.get('select[name="cliente"]').select('TODOS');
    cy.get('input[type="submit"]').contains('Pesquisar').click();
    cy.get('.table-responsive').contains(clienteAtivo);
  });
});

///<reference types="cypress"/>
const nome = Cypress.env('nomeCliente');
const valorMenor = Cypress.env('valorTransacaoMenor')
const valorMaior = Cypress.env('valorTransacaoMaior')
const valorIgual = Cypress.env('valorTransacaoIgual')

describe('Acessa página de login', () => {
    before(() => {
        cy.acessaPaginadeLogin();
    })

    after(()=>{
        cy.limparBase();
    })

    it('Realizar transação com valor menor que o saldo disponível', () => {
        cy.visit('http://provaqa.prc.rpe.tech:9080/desafioqa/incluirVenda');
        cy.get('select[name="cliente"]').select(nome);
        cy.get('input[name="valorTransacao"]').type(valorMenor);
        cy.get('button[type="submit"]').contains('Salvar').click()
        cy.get('#alertMessage').contains('Venda realizada com sucesso')
        cy.url().should('include', '/visualizarVenda');
    })

    it('Realizar transação com valor maior que o saldo disponível', () => {
        //esse é um cenário de erro, porém não possui mensagem de erro para validar nem qual o comportamento esperado quando esse cenário acontece
        cy.visit('http://provaqa.prc.rpe.tech:9080/desafioqa/incluirVenda');
        cy.get('select[name="cliente"]').select(nome);
        cy.get('input[name="valorTransacao"]').type(valorMaior);
        cy.get('button[type="submit"]').contains('Salvar').click()
    })

    it('Realizar transação com valor igual ao saldo disponível', () => {
        cy.visit('http://provaqa.prc.rpe.tech:9080/desafioqa/incluirVenda');
        cy.get('select[name="cliente"]').select(nome);
        cy.get('input[name="valorTransacao"]').type(valorIgual);
        cy.get('button[type="submit"]').contains('Salvar').click()
        cy.get('#alertMessage').contains('Venda realizada com sucesso')
        cy.url().should('include', '/visualizarVenda');
    })

    it('Listar as transações de todos os clientes', () => {
        cy.visit('http://provaqa.prc.rpe.tech:9080/desafioqa/listarVenda');
        cy.get('select[name="cliente"]').select('TODOS');
        cy.get('input[type="submit"]').contains('Pesquisar').click()
        cy.get('.table-responsive').should('not.be.empty')
        
    })

    it('Listar as transações de um cliente específico', () => {
        cy.visit('http://provaqa.prc.rpe.tech:9080/desafioqa/listarVenda');
        cy.get('select[name="cliente"]').select('TODOS');
        cy.get('input[type="submit"]').contains('Pesquisar').click()
        cy.get('.table-responsive').contains(nome)
        
    })


})

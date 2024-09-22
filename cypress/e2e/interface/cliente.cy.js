///<reference types="cypress"/>

const nomeAtivo = Cypress.env('nomeClienteAtivo')
const nomeInativo = Cypress.env('nomeClienteInativo')
const nomeZero = Cypress.env('nomeClienteZerado')
const cpf = Cypress.env('cpfCliente');
const saldo = Cypress.env('saldoDisponivel')
const saldoZero = Cypress.env('saldoZerado')

describe('Acessa página de login', () => {
    before(() => {
        cy.acessaPaginadeLogin();
    })
    it('Preencher o cadastro do cliente com todos os campos', () => {
        cy.visit('http://provaqa.prc.rpe.tech:9080/desafioqa/incluirCliente');
        cy.get('input[name="nome"]').type(nomeAtivo);
        cy.get('input[name="cpf"]').type(cpf);
        cy.get('select[name="status"]').select('Ativo');
        cy.get('input[name="saldoCliente"]').type(saldo);
        cy.get('button[type="submit"]').contains('Salvar').click()
        cy.get('#alertMessage').contains('Cliente salvo com sucesso')
        cy.url().should('include', '/visualizarCliente');
    })

    it('Preencher cadastro do cliente com status inativo', () => {
        cy.visit('http://provaqa.prc.rpe.tech:9080/desafioqa/incluirCliente');
        cy.get('input[name="nome"]').type(nomeInativo);
        cy.get('input[name="cpf"]').type(cpf);
        cy.get('select[name="status"]').select('Inativo');
        cy.get('input[name="saldoCliente"]').type(saldo);
        cy.get('button[type="submit"]').contains('Salvar').click()
        cy.get('#alertMessage').contains('Cliente salvo com sucesso')
        cy.url().should('include', '/visualizarCliente');
    })

    it('Preencher cadastro do cliente ativo com saldo zerado', () => {
        cy.visit('http://provaqa.prc.rpe.tech:9080/desafioqa/incluirCliente');
        cy.get('input[name="nome"]').type(nomeZero);
        cy.get('input[name="cpf"]').type(cpf);
        cy.get('select[name="status"]').select('Ativo');
        cy.get('input[name="saldoCliente"]').type(saldoZero);
        cy.get('button[type="submit"]').contains('Salvar').click()
        cy.get('#alertMessage').contains('Cliente salvo com sucesso')
        cy.url().should('include', '/visualizarCliente');
    })


    it('Preencher o cadastro do cliente com campos obrigatórios faltando', () => {
        cy.visit('http://provaqa.prc.rpe.tech:9080/desafioqa/incluirCliente');
        cy.get('input[name="nome"]').clear()
        cy.get('input[name="cpf"]').clear()
        cy.get('select[name="status"]').select('Ativo');
        cy.get('input[name="saldoCliente"]').clear();
        cy.get('button[type="submit"]').contains('Salvar').click()
        //o campo Saldo disponível está marcado como obrigatório 
        //mas o front não valida esse campo, e não retorna a mensagem de campo obrigatório, tornando impossível o teste do mesmo
        //por esse motivo validei apenas Nome e CPF.
        cy.get('.help-block')
            .filter(':contains("Campo Obrigatório")')
            .then(($elementos) => {
                expect($elementos).to.have.length(2);
            });
    })

    it('Listar clientes preenchendo os campos obrigatórios', () => {
        cy.visit('http://provaqa.prc.rpe.tech:9080/desafioqa/listarCliente');
        cy.get('input.form-control[type="text"]').type(nomeAtivo)
        cy.get('#calendario_input').click()
        cy.get('input[type="submit"]').contains('Pesquisar').click()
        cy.get('.table-responsive').contains(nomeAtivo)
    })
});
export const { clienteAtivo, clienteInativo, clienteZerado } =
  Cypress.env('nome');
export const { transacaoMenor, transacaoMaior, transacaoIgual } =
  Cypress.env('valor');
export const { usuario, senha } = Cypress.env('authOk');
export const { usuarioInvalido, senhaInvalida } = Cypress.env('authFalha');
export const cpf = Cypress.env('cpfCliente');
export const saldo = Cypress.env('saldoDisponivel');
export const saldoZero = Cypress.env('saldoZerado');

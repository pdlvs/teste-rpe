import './clienteCommands';
import './loginCommands';
import './transacaoCommands';

declare global {
  namespace Cypress {
    interface Chainable {
      // Login
      acessaPaginaDeLogin(): void;
      acessaPaginaDeLoginCredencialInvalida(): void;
      limparBase(): void;

      // Cliente
      acessaPaginaDeIncluirCliente(): void;
      acessaPaginaInicial(): void;

      // Venda
      acessaPaginaDeIncluirTransacao(): void;
      acessaPaginaDeListarVenda(): void;
    }
  }
}

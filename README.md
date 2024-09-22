# TEST-RPE-PATRICIA

## Descrição
Este projeto contém testes automatizados para uma aplicação que realiza vendas, verifica saldo e realiza cadastro de clientes.

## Estrutura do Projeto
- ⁠⁠ /cypress
  - ⁠ /e2e/interface - Contém os testes.
  - ⁠ /support⁠ - Configurações, comandos personalizados e variáveis de ambiente.

## Requisitos
•⁠  ⁠Node.js 18.X

## Como Instalar
1.⁠ ⁠Clone o repositório:
   ```bash
   git clone https://github.com/pdlvs/teste-rpe.git
   ```
2.⁠ ⁠Navegue até o diretório do projeto:
   ```bash
   cd teste-rpe
   ```
3.⁠ ⁠Instale as dependências:
   ```bash
   npm install
   ```

## Como Executar os Testes
Para abrir a interface do Cypress:
```bash
npm run cy:open
```
Para executar os testes em modo headless:
```bash
npm run cy:run
```
Para formatar arquivos:
```bash
npm run format
```

## Estrutura dos Testes
Os testes estão organizados em arquivos dentro da pasta ⁠``e2e/interface``. 

Cada arquivo contém testes relacionados a uma funcionalidade específica.

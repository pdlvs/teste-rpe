const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    screenshotOnRunFailure: false,
    baseUrl: 'http://provaqa.prc.rpe.tech:9080',
    testIsolation: false, 
    specPattern: [
      'cypress\\e2e\\interface\\cliente.cy.ts',
      'cypress\\e2e\\interface\\login.cy.ts',
      'cypress\\e2e\\interface\\transacao.cy.ts',
    ]
  },
});

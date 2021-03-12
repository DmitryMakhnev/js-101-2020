
describe('CRA', () => {
  it('shows learn link', function () {
    cy.visit('http://localhost:3000')
    cy.get('.auth-page').should('be.visible')
  });
})

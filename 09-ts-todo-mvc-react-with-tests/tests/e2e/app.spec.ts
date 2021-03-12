
describe('App', () => {
  it('Should display auth page by default', function () {
    cy.visit('http://localhost:3000')
    cy.get('.auth-page').should('be.visible')
  });
})


describe('App', () => {
  it('Should display auth page by default', function () {
    cy.visit('http://localhost:3000');
    cy.get('.auth-page').should('be.visible');
  });

  it(`Shouldn't be display for authorized user`, () => {
    cy.intercept(
      'GET',
      'http://localhost:3012/user',
      { fixture: 'user.response.json' }
    ).as('user');

    cy.visit('http://localhost:3000')
      .wait('@user');

    cy.get('.auth-page').should('not.exist');
  });

})

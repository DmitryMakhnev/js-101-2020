
describe('App', () => {
  context('Displaying', () => {
    it('Should be displayed for not authorized user', function () {
      cy.visit('http://localhost:3000');
      cy.get('.auth-page').should('be.visible');
    });

    it(`Shouldn't be displayed for authorized user`, () => {
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

  context('Authorization', () => {
    it('Should authorize user by login and password', () => {
      const login = 'user1';
      const password = Math.random().toString();

      cy.fixture('user.response.json').then((userFixture)  => {
        cy.intercept(
          'POST',
          'http://localhost:3012/auth/login',
          req => {
            const { body } = req;
            if (body.login === login && body.password === password) {
              req.reply({
                statusCode: 200,
                body: JSON.stringify(userFixture),
              });
            }
          }
        ).as('correctAuth');
      });

      cy.visit('http://localhost:3000');

      cy.get('.auth-page input[placeholder="login"]').type(login);
      cy.get('.auth-page input[type="password"]').type(password);
      cy.get('.auth-page button[type="submit"]').click();

      cy.wait('@correctAuth');
      cy.get('.auth-page').should('not.exist');
    });
  });


})

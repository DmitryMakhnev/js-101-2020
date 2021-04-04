import { INCORRECT_LOGIN_OR_PASSWORD_ERROR_NAME } from '../../src/consts/errors/names';
import { authEndpoint, getUserEndpoint, pageUrl } from '../../src/consts/urls';

describe('Auth Page', () => {
  context('Displaying', () => {
    it('Should be displayed for not authorized user', function () {
      cy.visit(pageUrl);
      cy.get('[data-test-id=auth-page]').should('be.visible');
    });

    it(`Shouldn't be displayed for authorized user`, () => {
      cy.intercept(
        'GET',
        getUserEndpoint,
        { fixture: 'user.response.json' }
      ).as('user');

      cy.visit(pageUrl)
        .wait('@user');

      cy.get('[data-test-id=auth-page]').should('not.exist');
    });
  })

  context('Authorization', () => {
    it('Should authorize user by login and password', () => {
      const login = 'user1';
      const password = Math.random().toString();

      cy.fixture('user.response.json').then((userFixture)  => {
        cy.intercept(
          'POST',
          authEndpoint,
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

      cy.visit(pageUrl);

      cy.get('[data-test-id=auth-form]').should('be.visible');
      cy.get('[data-test-id=auth-form__login-input]').type(login);
      cy.get('[data-test-id=auth-form__password-input]').type(password);
      // think about it in future ! Enter key !
      cy.get('[data-test-id=auth-form__submit]').click();

      cy.wait('@correctAuth');
      cy.get('[data-test-id=auth-page]').should('not.exist');
    });

    it('Should display error for authorization with incorrect login or password', () => {
      cy.intercept(
        'POST',
        authEndpoint,
        {
          statusCode: 401,
        }
      ).as('incorrectAuth');

      cy.visit(pageUrl);

      cy.get('[data-test-id=auth-form__login-input]').type('asd');
      cy.get('[data-test-id=auth-form__password-input]').type('sad');
      cy.get('[data-test-id=auth-form__submit]').click();

      cy.wait('@incorrectAuth');
      cy.get('[data-test-id=auth-form__error]')
        .should('be.visible')
        .should(
          'have.attr',
          'data-test-error-name',
          INCORRECT_LOGIN_OR_PASSWORD_ERROR_NAME
        );
    });
  });


});

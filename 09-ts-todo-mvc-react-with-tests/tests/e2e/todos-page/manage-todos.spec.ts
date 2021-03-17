import { todosEndpoint, getUserEndpoint, pageUrl } from '../../../src/consts/urls';

function interceptEmptyTodo() {
  cy.intercept(
      'GET',
      todosEndpoint,
      { fixture: 'empty-todos-list.response.json' }
  ).as('initialTodos');
}

function interceptTodoWithOneTask() {
  cy.intercept(
      'GET',
      todosEndpoint,
      { fixture: 'todo-list-with-one-task.response.json' }
  ).as('initialTodos');
}

function authorize(operation : () => void) {
  cy.intercept(
    'GET',
    getUserEndpoint,
    { fixture: 'user.response.json' }
  ).as('authorize');

  operation();

  cy.visit(pageUrl)
    .wait('@authorize')
    .wait('@initialTodos');
}

describe('Manage Todos', () => {
  context('Creation', () => {
    it('Create todo', () => {

      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.fixture('todo-item.response.json').then((todoItemResponse)  => {
        cy.intercept(
          'POST',
          todosEndpoint,
          req => {
            const { body } = req;
            req.reply({
              statusCode: 200,
              body: JSON.stringify({
                ...todoItemResponse,
                text: body.text
              })
            });
          }
        ).as('createTodo');
      });

      const itemText = Math.random().toString() + '_' + Date.now();

      authorize(interceptEmptyTodo);
      cy.get('[data-test-id=create-new-todo-form]').should('be.visible');
      cy.get('[data-test-id=create-new-todo-form__todo-text-input]').type(itemText);
      cy.get('[data-test-id=create-new-todo-form]').submit();

      cy.wait('@createTodo');

      cy.get('[data-test-id=todos-list]').should('be.visible');

      cy.get('[data-test-id=todo-item]').should('be.visible');
      cy.get('[data-test-id=todo-item__checked-checkbox]').should('not.be.checked');
      cy.get('[data-test-id=todo-item__text-input]').should('have.value', itemText);
      cy.get('[data-test-id=todo-item__remove-action]').should('be.visible');
    });
  });
});

describe('Delete Todos', () => {
  context('Delete', () => {
    it('Delete Todo', () => {

      authorize(interceptTodoWithOneTask);

      cy.get('[data-test-id=create-new-todo-form]').should('be.visible');
      cy.get('[data-test-id=todo-item]').should('be.visible');
      cy.get('[data-test-id=todo-item__remove-action]').should('be.visible');

      cy.get('[data-test-id=todo-item__remove-action]').click({ force: true });

      cy.get('[data-test-id=todo-item]').should('not.exist');
    });
  });
});

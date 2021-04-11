import { todosEndpoint, getUserEndpoint, pageUrl } from '../../../src/consts/urls';

function authorize(fixture: string) {
  cy.intercept(
    'GET',
    getUserEndpoint,
    { fixture: 'user.response.json' }
  ).as('authorize');

  cy.intercept(
    'GET',
    todosEndpoint,
    { fixture: fixture }
  ).as('initialTodos');

  cy.visit(pageUrl)
    .wait('@authorize')
    .wait('@initialTodos');
}

describe('Manage Todos', () => {
  context('Creation', () => {
    it('Create todo', () => {
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

      authorize('empty-todos-list.response.json');
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

  context('Deletion', () => {
    it('Delete single todo', () => {
      cy.fixture('todos-list.response.json').then((todoItem) => {
        let id = todoItem[0]['id'];
        cy.intercept(
            'DELETE',
            todosEndpoint,
            req => {
              const {body} = req;
              expect(body.id).to.equal(id);
              req.reply();
            }
        ).as('deleteTodo');
      });
  
      authorize('todos-list.response.json');
  
      cy.get('[data-test-id=todos-list]').should('be.visible');
      cy.get('[data-test-id=todo-item]').should('be.visible');
      cy.get('[data-test-id=task-counter]').should('have.text', "1 item left");
  
      cy.get('[data-test-id=todo-item__remove-action]').click({force: true})
      cy.wait('@deleteTodo');
      cy.get('[data-test-id=todo-item]').should('not.exist');
      cy.get('[data-test-id=todos-list]').should('be.empty');
      cy.get('[data-test-id=task-counter]').should('have.text', "0 items left");
    });
  });
});

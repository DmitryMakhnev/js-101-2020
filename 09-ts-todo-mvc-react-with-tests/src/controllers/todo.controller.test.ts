import { TodoController } from './todo.controller';
import { TodoDataModel, TodoListModel } from '../data-model/todo-list-model';
import { mockFetch } from '../utils/tests/mockFetch';

const todosFixture: TodoDataModel[] = [
  {
    id: '1',
    text: 'e2e',
    isDone: true,
  },
  {
    id: '2',
    text: 'unit',
    isDone: false
  }
]

describe('TodoController', () => {
  describe('getAll()', () => {
    it('should get items and store them in model', async () => {
      const todoListModel = new TodoListModel();
      const todoController = new TodoController(todoListModel);

      const runFetch = mockFetch(todosFixture);

      todoController.getAll();

      expect(todoListModel.isLoading).toBeTruthy();

      await runFetch();

      expect(todoListModel.isLoading).toBeFalsy();
      expect(todoListModel.items.length).toBe(todosFixture.length);
      expect(todoListModel.items[0].id).toBe(todosFixture[0].id);
      expect(todoListModel.items[1].id).toBe(todosFixture[1].id);
    });
  });
});

import { TodoDataModel, TodoListModel } from '../data-model/todo-list-model';
import { todosEndpoint } from '../consts/urls';

let idCounter = 0;

export type TodoUpdateDto = {
  id: string;
  isDone?: boolean;
  text?: string;
};

export class TodoController {

  constructor(
    private todoListModel: TodoListModel,
  ) {}

  getAll() {
    this.todoListModel.isLoading = true;
    fetch(
      todosEndpoint,
      {
        mode: 'cors',
        credentials: 'include'
      }
    )
      .then(response => response.json())
      .then(todoDataModels => {
        this.todoListModel.isLoading = false;
        this.todoListModel.storeInitialItems(todoDataModels);
      });
  }

  createTodo = (text: string) => {
    const newItem = this.todoListModel.addItem(
      (idCounter++).toString(),
      text
    );
    fetch(
      todosEndpoint,
      {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text
        })
      }
    )
      .then(response => response.json())
      .then(todoItemDataModel => {
        newItem.id = todoItemDataModel.id;
      });
  }

  removeTodo = (id: string) => {
    this.todoListModel.removeItem(id);
    fetch(
      todosEndpoint,
      {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id
        })
      }
    );
  }

  _debouncedUpdate = debounce(500, (updateDto: TodoDataModel) => {
    fetch(
      todosEndpoint,
      {
        method: 'PATCH',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateDto)
      }
    );
  })

  updateTodo = (updateDto: TodoUpdateDto) => {
    const todoItem = this.todoListModel.items.find(item => item.id === updateDto.id);
    if (todoItem) {
      if (updateDto.text) {
        todoItem.text = updateDto.text;
      }
      if (updateDto.isDone != null) {
        todoItem.isReady = updateDto.isDone;
      }
    }

    this._debouncedUpdate(updateDto);
  };

  clearCompleted = () => {
    this.todoListModel.items
      .filter(item => item.isReady)
      .forEach(item => this.removeTodo(item.id));
  }

  markAllAsReady = () => {
    this.todoListModel.items
      .filter(item => !item.isReady)
      .forEach(item => this.updateTodo({ id: item.id, isDone: true }));
  }

}

function debounce(timeout: number, fn: (...args: any[]) => any) {
  let currentTimoutId: number = -1;
  return (...args: any[]) => {
    window.clearTimeout(currentTimoutId);
    currentTimoutId = window.setTimeout(() => fn.apply(null, args), timeout);
  };
}

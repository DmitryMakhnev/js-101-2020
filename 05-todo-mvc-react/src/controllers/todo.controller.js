
let idIdCounter = 0;

export class TodoController {
  /**
   * @param {TodoListModel} todoListModel
   */
  constructor(todoListModel) {
    this._todoListModel = todoListModel;
  }

  getAll() {
    fetch(
      'http://localhost:3012/todos',
      {
        mode: 'cors',
        credentials: 'include'
      }
    )
      .then(response => response.json())
      .then(todoDataModels => {
        this._todoListModel.storeInitialItems(todoDataModels);
      });
  }

  createTodo = text => {
    const newItem = this._todoListModel.addItem(idIdCounter, text);
    fetch(
      'http://localhost:3012/todos',
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

  removeTodo = id => {
    this._todoListModel.removeItem(id);
    fetch(
      'http://localhost:3012/todos',
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

  _debouncedUpdate = debounce(500, updateDto => {
    fetch(
      'http://localhost:3012/todos',
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

  updateTodo = updateDto => {
    const todoItem = this._todoListModel.items.find(item => item.id === updateDto.id);
    if (updateDto.text) {
      todoItem.text = updateDto.text;
    }
    if (updateDto.isDone != null) {
      todoItem.isReady = updateDto.isDone;
    }

    this._debouncedUpdate(updateDto);
  };

  clearCompleted = () => {
    this._todoListModel.items
      .filter(item => item.isReady)
      .forEach(item => this.removeTodo(item.id));
  }

  markAllAsReady = () => {
    this._todoListModel.items
      .filter(item => !item.isReady)
      .forEach(item => this.updateTodo({ id: item.id, isDone: true }));
  }

}

function debounce(timeout, fn) {
  let currentTimoutId = -1;
  return (...args) => {
    clearTimeout(currentTimoutId);
    currentTimoutId = setTimeout(() => fn.apply(null, args), timeout);
  };
}

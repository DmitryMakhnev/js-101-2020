import { AbstractDomMountComponent } from '../abstract-component/abstract-dom-mount-component';

export class AddNewTodo extends AbstractDomMountComponent {
  _findElements() {
    this._input = this._rootNode.querySelector('.js-add-new-todo-input');
  }

  _bindEvents() {
    this._rootNode.addEventListener('submit', e => {
      e.preventDefault();
      this._extractCurrentTodoName();
    });
  }

  _extractCurrentTodoName() {
    const currentNewTodoText = this._input.value.trim();
    if (currentNewTodoText) {
      this._input.value = '';
      this._callbackMap.onNew(currentNewTodoText);
    }
  }
}

import { createTodoItem } from './todo-item.template';
import { AbstractRenderingComponent } from '../abstract-component/abstract-rendering-component';
import EventEmitter from 'eventemitter3';
import { autorun } from 'mobx';


export class TodoItem extends AbstractRenderingComponent {

  constructor(model) {
    super(model);
    this.events = new EventEmitter();
  }

  _render(model) {
    return createTodoItem(model);
  }

  _findElements() {
    this._removeAction = this.root.querySelector('.js-todo-item-remove-action');
    this._readyMarker = this.root.querySelector('.js-todo-ready-marker');
    this._textInput = this.root.querySelector('.task-item__text');
  }

  _bindEvents() {
    this._removeAction.addEventListener('click', () => {
      this.events.emit('remove');
    });
    this._readyMarker.addEventListener('change', e => {
      this._model.isReady = e.target.checked;
    });
    this._textInput.addEventListener('input', e => {
      this._model.text = e.target.value;
    });
  }

  /**
   * @param {TodoItemModel} model
   * @private
   */
  _bindModel(model) {
    autorun(() => {
      this._readyMarker.checked = model.isReady;
      this._model.text = model.text;
    });
  }
}

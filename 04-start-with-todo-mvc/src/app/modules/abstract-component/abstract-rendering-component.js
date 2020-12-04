import EventEmitter from 'eventemitter3';

export class AbstractRenderingComponent {
  /**
   * @param {Object} props
   */
  constructor(props) {
    this.events = new EventEmitter();
    this.root = this._render(props);
    this._findElements();
    this._bindEvents();
  }

  /**
   * @param {Object} props
   * @return HTMLElement
   * @protected
   * @abstract
   */
  _render(props) {}

  /**
   * @protected
   */
  _findElements() {}

  /**
   * @protected
   */
  _bindEvents() {}
}

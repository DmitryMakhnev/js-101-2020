
export class AbstractRenderingComponent {
  /**
   * @param {Object} props
   * @param {Object<string, function(): void>} callbackMap
   */
  constructor(props, callbackMap) {
    this.root = this._render(props);
    this._callbackMap = callbackMap;
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

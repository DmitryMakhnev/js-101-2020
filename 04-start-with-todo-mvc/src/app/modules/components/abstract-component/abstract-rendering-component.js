export class AbstractRenderingComponent {
  /**
   * @param {Object} model
   */
  constructor(model) {
    this._model = model;
    this.root = this._render(model);
    this._findElements();
    this._bindEvents();
    this._bindModel(model);
  }

  /**
   * @param {Object} model
   * @return HTMLElement
   * @protected
   * @abstract
   */
  _render(model) {}

  /**
   * @protected
   */
  _findElements() {}

  /**
   * @protected
   */
  _bindEvents() {}

  /**
   * @protected
   */
  _bindModel(model) {}
}

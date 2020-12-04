/**
 * @abstract
 */
export class AbstractDomMountComponent {

  /**
   * @param {HTMLFormElement} rootNode
   * @param {*} model
   */
  constructor(rootNode, model) {
    /**
     * @protected
     */
    this._rootNode = rootNode;
    this._model = model;
    this._findElements();
    this._bindEvents();
    this._bindModel(model);
  }

  /**
   * @protected
   */
  _bindModel(model) {}

  /**
   * @protected
   */
  _findElements() {}

  /**
   * @protected
   */
  _bindEvents() {}
}

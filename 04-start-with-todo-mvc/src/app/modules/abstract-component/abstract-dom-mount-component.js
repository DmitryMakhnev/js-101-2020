/**
 * @abstract
 */
export class AbstractDomMountComponent {

  /**
   * @param {HTMLFormElement} rootNode
   * @param {Object<string, function(): void>} [callbackMap]
   */
  constructor(rootNode, callbackMap) {
    /**
     * @protected
     */
    this._rootNode = rootNode;
    /**
     * @protected
     */
    this._callbackMap = callbackMap;
    this._findElements();
    this._bindEvents();
  }

  /**
   * @protected
   */
  _findElements() {}

  /**
   * @protected
   */
  _bindEvents() {}
}

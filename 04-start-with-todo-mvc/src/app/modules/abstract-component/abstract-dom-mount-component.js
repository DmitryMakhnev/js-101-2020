import EventEmitter from 'eventemitter3';

/**
 * @abstract
 */
export class AbstractDomMountComponent {

  /**
   * @param {HTMLFormElement} rootNode
   */
  constructor(rootNode) {
    this.events = new EventEmitter();

    /**
     * @protected
     */
    this._rootNode = rootNode;
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

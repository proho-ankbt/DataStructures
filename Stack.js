class Stack {
  #elements = [];

  /**
   * @param {Array} elements Array of elements in stack, last one is the top one
   */
  constructor(elements = []) {
    if (!Array.isArray(elements)) {
      throw new Error("Elements must be Array or undefined");
    }
    this.#elements = elements;
  }

  /**
   * Removes element from stack and return it
   * @returns {T} Top element of stack or undefined if empty
   */
  pop() {
    return this.#elements.pop();
  }

  /**
   * Adds elemts to stack
   * @param {T} element Element to add to stack
   */
  push(element) {
    this.#elements.push(element);
  }

  /**
   * Returns last element from stack without removing it
   * @returns Element from top of stack
   */
  peek() {
    if (this.#elements.length) return this.#elements[this.#elements.length - 1];
  }

  /**
   * Return number of elements in stack
   * @returns stack length
   */
  length() {
    return this.#elements.length;
  }
}

module.exports = Stack;

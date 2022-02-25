class Queue {
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
  remove() {
    return this.#elements.shift();
  }

  /**
   * Adds elemts to stack
   * @param {T} element Element to add to stack
   */
  add(element) {
    this.#elements.push(element);
  }

  /**
   * Return number of elements in stack
   * @returns stack length
   */
  length() {
    return this.#elements.length;
  }

  print() {
    console.log(this.#elements);
  }
}

module.exports = Queue;

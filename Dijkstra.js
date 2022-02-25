class Dijkstra {
  #matrix = null;
  #faraway = null;
  #visited = null;
  #prev = null;

  /**
   * @param {Array[Array]} matrix Matrix of weights between diferent verticies
   */
  constructor(matrix) {
    if (!matrix) {
      throw new Error("Matrix is required");
    } else if (!Array.isArray(matrix)) {
      throw new Error("Matrix must be of type Array");
    }
    this.#matrix = matrix;
    this.#init();
  }

  #init() {
    this.#faraway = new Array(this.#matrix.length).fill(0);
    this.#visited = new Array(this.#matrix.length).fill(false);
    this.#prev = new Array(this.#matrix.length).fill(-1);
  }

  /**
   * Calculate and returns shortest path between two points if possible
   * @param {Number} start starting point
   * @param {Number} end ending point
   * @returns shortest path between two points if possible
   */
  calculate(start, end) {
    start = Number(start);
    end = Number(end);

    if (isNaN(start) || isNaN(end)) {
      throw new Error("Start and end must be numbers");
    }

    if (
      start < 0 ||
      end < 0 ||
      start >= this.#matrix.length ||
      end >= this.#matrix.length
    ) {
      throw new Error(
        `start and end must be within [0, ${this.#matrix.length})`
      );
    }

    if (start === end) return [[start, 0]];

    const path = this.#doCalculation(start, end);
    return path;
  }

  #doCalculation(start, end) {
    // do init check
    this.#visited[start] = true;
    for (let i = 0; i < this.#matrix.length; i++) {
    //   if (this.#matrix[i][start]) {
        if (this.#matrix[start][i]) {
        // this.#faraway[i] = this.#matrix[i][start];
        this.#faraway[i] = this.#matrix[start][i];
        this.#prev[i] = start;
      }
    }
    const startTime = Date.now();
    while (this.#visited.some((x) => !x)) {
      const visitingNode = this.#findSmallestUncheckd();
      if(visitingNode === -1) debugger;
      const startWeight = this.#faraway[visitingNode];
      this.#visited[visitingNode] = true;

      for (let i = 0; i < this.#matrix.length; i++) {
        // const currentWeight = this.#matrix[i][visitingNode];
        const currentWeight = this.#matrix[visitingNode][i];
        if (currentWeight === 0) continue;
        if (startWeight + currentWeight < this.#faraway[i]) {
          this.#faraway[i] = startWeight + currentWeight;
          this.#prev[i] = visitingNode;
        }
      }

      // if(Date.now() - startTime > 0.5 * 1000) throw new Error("loop expired")
      console.log('visited\t', ...this.#visited)
      console.log('faraway\t',...this.#faraway);
      console.log('visting\t', ...this.#matrix[visitingNode], "|",visitingNode);
    }

    return this.#finalizeCalculations();
  }

  #finalizeCalculations(){
    let finalWeights = [],
    finalPath = [],
    currentNode = end;
  for (let i = 0; i < this.#matrix.length; i++) {
    finalWeights.unshift(this.#faraway[currentNode]);
    finalPath.unshift(currentNode);
    currentNode = this.#prev[currentNode];
    if (currentNode === start) break;
  }

  return {
    finalWeights,
    finalPath,
    totalWeight: finalWeights.reduce((t, c) => (t += c), 0),
  };
  }

  #findSmallestUncheckd() {
    const arr = this.#visited
      .map((visited, index) => ({
        visited,
        weight: this.#faraway[index],
      }))
      .filter((c) => !c.visited && c.weight > 0)
      .map((x) => x.weight);
    return this.#faraway.findIndex((el) => el === Math.min(...arr));
  }
}

// module.exports = Dijkstra;

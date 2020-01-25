class Graph {
  constructor() {
    this.nodes = [];
    this.startNode = null;
    this.goalNode = null;
    this.open = [];
    this.closed = [];
  }

  initializeGraph() {
    this.nodes = [];
    for (let i = 0; i < 25; i++) {
      const newRow = [];
      for (let j = 0; j < 50; j++) {
        newRow.push(this.createNode(i, j));
      }
      this.nodes.push(newRow);
    }
  }

  createNode(row, col) {
    return {
      row: row,
      col: col,
      parent: null,
      children: [],
      isStart: false,
      isGoal: false,
      isWall: false,
      visited: false,
      depth: 0,
      weight: 1,
      instantVisited: false,
      instantPath: false,
      g: 0,
      h: 0,
      f: 0
    };
  }

  //check whether node is in open list
  checkOpen(node) {
    return this.open.includes(node);
  }

  //check whether node is in closed list
  checkClosed(node) {
    return this.closed.includes(node);
  }

  resetGraph() {
    this.nodes.forEach(row => {
      row.forEach(node => {
        //console.log(node);
        node.parent = null;
        node.f = 0;
        node.g = 0;
        node.h = 0;
        node.depth = 0;
        node.visited = false;
        node.isPath = false;
        node.instantVisited = false;
        node.instantPath = false;
      });
    });
    this.closed = [];
    this.open = [];
  }
}

export default Graph;

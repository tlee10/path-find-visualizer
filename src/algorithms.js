const graphSearch = (graph, ordering) => {
  const startNode = graph.startNode;
  const goalNode = graph.goalNode;
  updateDiscoveredNode(startNode, startNode, 0);
  const openList = graph.open;
  const closedList = graph.closed;
  openList.push(startNode);
  let reachedGoal = false;
  let actions, current;

  while (openList.length) {
    current = openList.shift();
    // console.log(current);
    // console.log(openList.length);
    if (current === goalNode) {
      reachedGoal = true;
      break;
    } else {
      closedList.push(current);
      //all allowed actions for current node
      actions = formulateActions(current, graph);
      //different ordering of open list for each algo
      actions.forEach(destination => {
        //destination not in closed list
        if (!graph.checkClosed(destination)) {
          switch (ordering) {
            case "bfs":
              //console.log("bfs");
              setInterval(10000);
              bfs(current, destination, graph);
              break;
            case "dfs":
              dfs(current, destination, graph);
              break;
          }
        }
      });
    }
  }
  let path = "";
  if (reachedGoal) {
    //do something
    current = goalNode;
    while (current.parent !== current) {
      path = "-node(" + current.row + "," + current.col + ")" + path;
      current = current.parent;
    }
    path = "node(" + current.row + "," + current.col + ")" + path; 
  }
  console.log(path);
};

const updateDiscoveredNode = (current, parent, weight) => {
  // console.log(
  //   "parent Node[" + parent.row.toString() + "," + parent.col.toString() + "]"
  // );
  // console.log(
  //   "child Node[" + current.row.toString() + "," + current.col.toString() + "]"
  // );
  current.parent = parent;
  current.g = parent.g + weight;
  current.f = current.g + current.h;
};

const formulateActions = (current, graph) => {
  const row = current.row;
  const col = current.col;
  const actions = [];
  //up
  if (row > 0) actions.push(graph.nodes[row - 1][col]);
  //down
  if (row < graph.nodes.length - 1) actions.push(graph.nodes[row + 1][col]);
  //left
  if (col > 0) actions.push(graph.nodes[row][col - 1]);
  //right
  if (col < graph.nodes[0].length - 1) actions.push(graph.nodes[row][col + 1]);

  return actions;
};

const bfs = (current, destination, graph) => {
  //destination not in open list
  if (!graph.checkOpen(destination)) {
    updateDiscoveredNode(destination, current, 1);
    graph.open.push(destination);
  }
};

const dfs = (current, destination, graph) => {
  //destination not in open list
  if (!graph.checkOpen(destination)) {
    updateDiscoveredNode(destination, current, 1);
    graph.open.unshift(destination);
  }
};

export { graphSearch, updateDiscoveredNode, bfs, dfs, formulateActions };

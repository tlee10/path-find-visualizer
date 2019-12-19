const graphSearch = (graph, ordering) => {
  const startNode = graph.startNode;
  const goalNode = graph.goalNode;
  updateDiscoveredNode(startNode, startNode, 0);
  const openList = graph.open;
  const closedList = graph.closed;
  openList.push(startNode);
  let reachedGoal = false;
  if (ordering === "A*") startNode.h = heuristic(startNode, goalNode);
  let actions, current;

  while (openList.length) {
    current = openList.shift();
    closedList.push(current);
    if (current.isGoal) {
      reachedGoal = true;
      break;
    } else {
      //all allowed actions for current node
      actions = formulateActions(current, graph);
      //different ordering of open list for each algo
      actions.forEach(destination => {
        //destination not in closed list
        if (!destination.isWall) {
          if (!graph.checkClosed(destination)) {
            switch (ordering) {
              case "BFS":
                bfs(current, destination, graph);
                break;
              case "DFS":
                dfs(current, destination, graph);
                break;
              case "Greedy Best-First Search":
                destination.h = heuristic(destination, goalNode);
                bestFirstSearch(current, destination, graph);
              //algorithms with weighted graph
              default:
                if (ordering === "A*")
                  destination.h = heuristic(destination, goalNode);
                weightedSearch(current, destination, graph);
            }
          }
        }
      });
      //algorithms that use priority queue
      if (ordering === "Dijkstra" || ordering === "A*" || ordering === "Greedy Best-First Search")
        openList.sort((a, b) => (a.f < b.f ? -1 : 1));
    }
  }

  // let path = "";
  // if (reachedGoal) {
  //   //do something
  //   current = goalNode;
  //   while (current.parent !== current) {
  //     path = "-node(" + current.row + "," + current.col + ")" + path;
  //     current = current.parent;
  //   }
  //   path = "node(" + current.row + "," + current.col + ")" + path;
  // }
  // current.isStart ? console.log(path) : console.log("NO PATH");
};

const updateDiscoveredNode = (destination, current, weight) => {
  destination.parent = current;
  destination.g = current.g + weight;
  destination.f = destination.g + destination.h;
};

const formulateActions = (current, graph) => {
  const row = current.row;
  const col = current.col;
  const actions = [];
  //up
  if (row > 0) actions.push(graph.nodes[row - 1][col]);
  //right
  if (col < graph.nodes[0].length - 1) actions.push(graph.nodes[row][col + 1]);
  //down
  if (row < graph.nodes.length - 1) actions.push(graph.nodes[row + 1][col]);
  //left
  if (col > 0) actions.push(graph.nodes[row][col - 1]);

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
  updateDiscoveredNode(destination, current, 1);
  //deepest node expands first
  if (graph.checkOpen(destination)) {
    graph.open.splice(graph.open.indexOf(destination), 1);
  }
  graph.open.unshift(destination);
};

// const dijkstra = (current, destination, graph) => {
//   if (!graph.checkOpen(destination)){
//     updateDiscoveredNode(destination, current, current.weight);
//     graph.open.push(destination);
//   }
//   else {
//     if (current.f + destination.weight < destination.f){
//       updateDiscoveredNode(destination, current, destination.weight);
//     }
//   }
// }

const bestFirstSearch = (current, destination, graph) => {
  if (!graph.checkOpen(destination)) {
    updateDiscoveredNode(destination, current, 0);
    graph.open.push(destination);
  } else {
    let cost = current.g + destination.weight;
    if (cost + destination.h <= destination.f) {
      updateDiscoveredNode(destination, current, 0);
    }
  }
}

//dijkstra and A*
const weightedSearch = (current, destination, graph) => {
  if (!graph.checkOpen(destination)) {
    updateDiscoveredNode(destination, current, destination.weight);
    graph.open.push(destination);
  } else {
    let cost = current.g + destination.weight;
    if (cost + destination.h <= destination.f) {
      updateDiscoveredNode(destination, current, destination.weight);
    }
  }
};

//Manhattan Distance (the lightest weight = 1)
const heuristic = (node, goalNode) => {
  let dx = Math.abs(node.col - goalNode.col);
  let dy = Math.abs(node.row - goalNode.row);
  return dx + dy;
};

export default graphSearch;

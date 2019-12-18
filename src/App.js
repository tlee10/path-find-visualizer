import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grid";
import NavBar from "./components/NavBar";
import Graph from "./Graph";
import graphSearch from "./algorithms";
import _ from "lodash";

const START_NODE_ROW = 12;
const START_NODE_COL = 15;
const GOAL_NODE_ROW = 12;
const GOAL_NODE_COL = 35;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: new Graph(),
      algorithms: [{ name: "bfs" }, { name: "dfs" }],
      algoChosen: "",
      animationActivated: false,
      clickAction: "",
      addNodeFeature: "Wall"
    };
  }

  componentDidMount = () => {
    const graph = new Graph();
    graph.initializeGraph();

    const startNode = graph.nodes[START_NODE_ROW][START_NODE_COL];
    graph.startNode = startNode;
    startNode.isStart = true;

    const goalNode = graph.nodes[GOAL_NODE_ROW][GOAL_NODE_COL];
    graph.goalNode = goalNode;
    goalNode.isGoal = true;
    this.setState({ graph });
  };

  //algorithm selection
  handleAlgoDropdown = name => {
    if (name !== "Dijkstra" || name !== "A*")
      this.setState({ algoChosen: name, addNodeFeature: "Wall" });
    else this.setState({ algoChosen: name });
  };

  handleNodeFeatureDropdown = name => {
    this.setState({ addNodeFeature: name });
  };

  copyGraph = state => {
    const graph = _.cloneDeep(state.graph);
    return graph;
  };

  onMouseDown = node => {
    if (!this.state.animationActivated) {
      //actions to take depends on what node user clicked on
      this.setState({
        clickAction: node.isStart ? "start" : node.isGoal ? "goal" : "normal"
      });
      //click on non-special nodes will turn them to walls
      const graph = this.copyGraph(this.state);

      if (!node.isStart && !node.isGoal) {
        if (
          this.state.addNodeFeature === "Wall" &&
          graph.nodes[node.row][node.col].weight === 1
        )
          graph.nodes[node.row][node.col].isWall = !node.isWall;
        else if (
          this.state.addNodeFeature === "Weight 2" &&
          !graph.nodes[node.row][node.col].isWall
        )
        if (graph.nodes[node.row][node.col].weight !== 2) {
          graph.nodes[node.row][node.col].weight = 2;
        } else graph.nodes[node.row][node.col].weight = 1;
        else if (
          this.state.addNodeFeature === "Weight 3" &&
          !graph.nodes[node.row][node.col].isWall
        )
        if (graph.nodes[node.row][node.col].weight !== 2) {
          graph.nodes[node.row][node.col].weight = 2;
        } else graph.nodes[node.row][node.col].weight = 1;
      }
      this.setState({ graph });
    }
  };

  onMouseEnter = node => {
    if (this.state.clickAction !== "") {
      this.setState((state, props) => {
        const graph = this.copyGraph(state);

        if (state.clickAction === "start") {
          graph.startNode = graph.nodes[node.row][node.col];
          graph.nodes[node.row][node.col].isStart = true;
        } else if (state.clickAction === "goal") {
          graph.goalNode = graph.nodes[node.row][node.col];
          graph.nodes[node.row][node.col].isGoal = true;
        } else if (
          state.clickAction === "normal" &&
          !node.isStart &&
          !node.isGoal &&
          this.state.addNodeFeature === "Wall" &&
          graph.nodes[node.row][node.col].weight === 1
        ) {
          graph.nodes[node.row][node.col].isWall = !node.isWall;
        } else if (
          state.clickAction === "normal" &&
          !node.isStart &&
          !node.isGoal &&
          this.state.addNodeFeature === "Weight 2" &&
          !graph.nodes[node.row][node.col].isWall
        ) {
          if (graph.nodes[node.row][node.col].weight !== 2) {
            graph.nodes[node.row][node.col].weight = 2;
          } else graph.nodes[node.row][node.col].weight = 1;
        } else if (
          state.clickAction === "normal" &&
          !node.isStart &&
          !node.isGoal &&
          this.state.addNodeFeature === "Weight 3" &&
          !graph.nodes[node.row][node.col].isWall
        ) {
          if (graph.nodes[node.row][node.col].weight !== 3) {
            graph.nodes[node.row][node.col].weight = 3;
          } else graph.nodes[node.row][node.col].weight = 1;
        }
        return { ...state, graph };
      });
    }
  };

  onMouseLeave = node => {
    if (this.state.clickAction !== "") {
      this.setState((state, props) => {
        const graph = this.copyGraph(state);

        if (this.state.clickAction === "start")
          graph.nodes[node.row][node.col].isStart = false;
        else if (this.state.clickAction === "goal")
          graph.nodes[node.row][node.col].isGoal = false;
        return { ...state, graph };
      });
    }
  };

  onMouseUp = () => {
    //mouse up after either start node or goal node is clicked
    if (this.state.clickAction !== "") this.setState({ clickAction: "" });
  };

  activateSearch = () => {
    if (this.state.algoChosen !== "" && !this.state.animationActivated) {
      this.setState((state, props) => {
        const graph = this.copyGraph(state);
        graph.resetGraph();
        graphSearch(graph, state.algoChosen);
        //graph.closed.forEach((node) => {node.visited = true;});
        return { graph, animationActivated: true };
      });
      setTimeout(() => this.animateSearch(), 100);
    }
  };

  //animate path searching by changing 'visited' property of nodes in closed list to true
  animateSearch = () => {
    const oldGraph = this.state.graph;
    let i;
    oldGraph.closed.forEach((node, iteration) => {
      i = iteration;
      setTimeout(() => {
        this.setState((state, props) => {
          const graph = this.copyGraph(state);
          graph.nodes[node.row][node.col].visited = true;
          return { graph };
        });
      }, 100 * iteration);
    });
    console.log(i);
    setTimeout(() => this.animatePath(), 100 * (i + 1));
  };

  animatePath = () => {
    let current = this.state.graph.goalNode;
    const path = [];
    let i;
    //if node's parent is not itself and there's a path
    while (current.parent !== current && current.parent !== null) {
      path.unshift({ row: current.row, col: current.col });
      current = current.parent;
    }
    path.unshift({ row: current.row, col: current.col });
    console.log("coordinates");
    console.log(path);
    if (current.parent === current) {
      path.forEach((coordinates, iteration) => {
        i = iteration;
        setTimeout(() => {
          this.setState((state, props) => {
            const newGraph = this.copyGraph(state);
            newGraph.nodes[coordinates.row][coordinates.col].isPath = true;
            return { graph: newGraph };
          });
        }, 100 * iteration);
      });
      setTimeout(() => {
        this.setState({ animationActivated: false });
      }, 100 * i);
    }
  };

  clearWalls = () => {
    if (!this.state.animationActivated) {
      const newGraph = this.copyGraph(this.state);
      newGraph.nodes.forEach(row => {
        row.forEach(node => {
          node.isWall = false;
        });
      });
      this.setState({ graph: newGraph });
    }
  };

  clearWeight = () => {
    if (!this.state.animationActivated) {
      const newGraph = this.copyGraph(this.state);
      newGraph.nodes.forEach(row => {
        row.forEach(node => {
          node.weight = 1;
        });
      });
      this.setState({ graph: newGraph });
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          algoChosen={this.state.algoChosen}
          handleAlgoDropdown={this.handleAlgoDropdown}
          handleNodeFeatureDropdown={this.handleNodeFeatureDropdown}
          activateSearch={this.activateSearch}
          resetGraph={this.resetGraph}
          clearWalls={this.clearWalls}
          clearWeight={this.clearWeight}
          animationActivated={this.state.animationActivated}
          addNodeFeature={this.state.addNodeFeature}
        />
        <Grid
          grid={this.state.graph.nodes}
          onMouseDown={this.onMouseDown}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onMouseUp={this.onMouseUp}
        />
      </React.Fragment>
    );
  }
}

export default App;

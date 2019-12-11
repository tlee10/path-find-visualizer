import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grid";
import NavBar from "./components/NavBar";
import Graph from "./Graph";
import graphSearch from "./algorithms";

const START_NODE_ROW = 12;
const START_NODE_COL = 15;
const GOAL_NODE_ROW = 0;
const GOAL_NODE_COL = 35;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: new Graph(),
      algorithms: [{ name: "bfs" }, { name: "dfs" }],
      algoChosen: "",
      animationActivated: false,
      clickAction: ""
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
    this.setState({algoChosen: name});
  };

  activateSearch = () => {
    if (this.state.algoChosen !== ""){
      const graph = this.state.graph;
      graph.resetGraph();
      this.setState({ graph });
      setTimeout(() => {
        graphSearch(graph, this.state.algoChosen);
        this.animateSearch();
      }, 100);

    }
  }

  onMouseDown = node => {
    if (!this.state.animationActivated) {
      //actions to take depends on what node user clicked on
      this.setState({ clickAction: node.isStart ? "start" : node.isGoal ? "goal" : "wall"});
    }
    const graph = this.state.graph;
    if (!node.isStart && !node.isGoal) node.isWall = !node.isWall;
    this.setState({graph}); 
  };

  onMouseEnter = node => {
    const graph = this.state.graph;
    
    if (this.state.clickAction === "start") {
      graph.startNode = node;
      node.isStart = true;
    } else if (this.state.clickAction === "goal"){
      graph.goalNode = node;
      node.isGoal = true;
    }
    else if (this.state.clickAction === "wall" && !node.isStart && !node.isGoal) node.isWall = !node.isWall;
    
    this.setState({ graph });
    
  };

  onMouseLeave = node => {
    const graph = this.state.graph;
    
    if (this.state.clickAction === "start")   node.isStart = false;
    else if (this.state.clickAction === "goal")   node.isGoal = false;
    this.setState({ graph });
    
  };

  onMouseUp = () => {
    //mouse up after either start node or goal node is clicked
    if (this.state.clickAction !== "") this.setState({ clickAction: "" });
  };

  animateSearch = () => {
    const graph = this.state.graph;

    graph.closed.forEach((node, iteration) => {
      setTimeout(() => {
        const newNode = {
          ...node,
          visited: true
        };
        graph.nodes[node.row][node.col] = newNode;
        this.setState({ graph });
      }, 100 * iteration);
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar algoChosen={this.state.algoChosen} handleAlgoDropdown={this.handleAlgoDropdown} activateSearch={this.activateSearch}/>
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

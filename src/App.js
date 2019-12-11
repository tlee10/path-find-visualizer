import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grid";
import NavBar from "./components/NavBar";
import Graph from "./Graph";
import graphSearch from "./algorithms";
import _ from "lodash";
import { node } from "prop-types";

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
      algoChosen: null,
      animationActivated: false,
      isSpecialNode: ""
    };
    // this.handleAlgoDropdown = this.handleAlgoDropdown.bind(this);
    // this.animateSearch = this.animateSearch.bind(this);
    // this.onMouseDown = this.onMouseDown.bind(this);
    // this.onMouseEnter = this.onMouseEnter.bind(this);
    // this.onMouseUp = this.onMouseUp.bind(this);
    // this.onMouseLeave = this.onMouseLeave.bind(this);
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
    const { graph } = this.state;
    graph.resetGraph();
    graphSearch(graph, name);
    this.animateSearch();
  };

  onMouseDown = node => {
    //user clicked on start node or goal node
    if (
      (node.isGoal && !this.state.animationActivated) ||
      (node.isStart && !this.state.animationActivated)
    )
      this.setState({ isSpecialNode: node.isStart ? "start" : "goal" });
    ;
  };

  onMouseEnter = node => {
    const graph = this.state.graph;
    if (this.state.isSpecialNode !== "") {
      
      if (this.state.isSpecialNode === "start") {
        graph.startNode = node;
        node.isStart = true;
      } else {
        graph.goalNode = node;
        node.isGoal = true;
      }
      this.setState({ graph });
      
    }
  };

  onMouseLeave = node => {
    const graph = this.state.graph;
    if (this.state.isSpecialNode !== "") {
      
      if (this.state.isSpecialNode === "start") {
        node.isStart = false;
      } else {
        node.isGoal = false;
      }
      this.setState({ graph });
      
    }
  };

  onMouseUp = node => {
    //mouse up after either start node or goal node is clicked
    if (this.state.isSpecialNode !== "") this.setState({ isSpecialNode: "" });
    
  };

  animateSearch = () => {
    const currentGraph = this.state.graph;
    //const newGraph = JSON.parse(JSON.stringify(currentGraph));
    //const newGraph = Flatted.parse(Flatted.stringify(currentGraph));
    const newGraph = _.cloneDeep(currentGraph);

    // currentGraph.closed.forEach((node, iteration) => {
    //   const newNode = {
    //     ...node,
    //     visited: true
    //   }
    //   newGraph.nodes[node.row][node.col] = newNode;
    //   setTimeout(() => {
    //     this.setState({graph: newGraph});
    //   }, 1000*iteration);
    // });
    for (let i = 0; i < currentGraph.closed.length; i++) {
      setTimeout(() => {
        const node = currentGraph.closed[i];
        const newNode = {
          ...node,
          visited: true
        };
        newGraph.nodes[node.row][node.col] = newNode;
        this.setState({ graph: newGraph });
      }, 100 * i);
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar handleAlgoDropdown={this.handleAlgoDropdown} />
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

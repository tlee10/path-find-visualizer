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
      algoChosen: null
    };
    this.handleAlgoDropdown = this.handleAlgoDropdown.bind(this);
    this.animateSearch = this.animateSearch.bind(this);
  }

  componentDidMount() {
    const graph = new Graph();
    graph.initializeGraph();

    const startNode = graph.nodes[START_NODE_ROW][START_NODE_COL];
    graph.startNode = startNode;
    startNode.isStart = true;

    const goalNode = graph.nodes[GOAL_NODE_ROW][GOAL_NODE_COL];
    graph.goalNode = goalNode;
    goalNode.isGoal = true;
    this.setState({ graph });
  }

  handleAlgoDropdown(name) {
    const { graph } = this.state;
    graph.resetGraph();
    graphSearch(graph, name);
    this.animateSearch();
  }

  animateSearch() {
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
  }

  render() {
    return (
      <React.Fragment>
        <NavBar handleAlgoDropdown={this.handleAlgoDropdown} />
        <Grid grid={this.state.graph.nodes} />
      </React.Fragment>
    );
  }
}

export default App;

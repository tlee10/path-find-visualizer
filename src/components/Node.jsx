import "/Users/tx-10/Desktop/react/path-find-visualizer/src/App.css";
import React from "react";

const Node = props => {
  //const {col, row, isDiscovered, isVisited, isWall}
  
  const {
    node,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp
  } = props;

  const isVisited = node.visited ? "visited" : "";

  return (
    <div
      id={`node-${node.row}-${node.col}`}
      className={`node ${isVisited}`}
      onMouseDown={() => onMouseDown(node)}
      onMouseEnter={() => onMouseEnter(node)}
      onMouseLeave={() => onMouseLeave(node)}
      onMouseUp={() => onMouseUp(node)}
    >
      <strong>{node.isStart ? "S" : node.isGoal ? "G" : ""}</strong>
    </div>
  );
};

export default Node;

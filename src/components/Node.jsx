import "../App.css";
//import "../styles/dice_2.png";
//import "../styles/dice_3.png";
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
  const isPath = node.isPath ? "path" : "";
  const isWall = node.isVisited ? "" : node.isWall ? "wall" : "";

  return (
    <div
      id={`node-${node.row}-${node.col}`}
      className={`node ${isVisited} ${isPath} ${isWall}`}
      onMouseDown={() => onMouseDown(node)}
      onMouseEnter={() => onMouseEnter(node)}
      onMouseLeave={() => onMouseLeave(node)}
      onMouseUp={() => onMouseUp()}
    >
      <strong>{node.isStart ? "S" : node.isGoal ? "G" : ""}</strong>
      {node.weight === 2 ? <img className="dice" src="../../public/dice_2.png" unselectable="on"/> : node.weight === 3 ? <img className="dice" src="../../public/dice_3.png" unselectable="on"/> : ""}
      

    </div>
  );
};

export default Node;

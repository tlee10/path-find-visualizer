import React from "react";

const Node = props => {
  
  const {
    node,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    onContextMenu
  } = props;

  const isVisited = node.visited ? "visited" : "";
  const isPath = node.isPath ? "path" : "";
  const isWall = node.isVisited ? "" : node.isWall ? "wall" : "";
  const isWeighted = node.weight === 3 ? "weight3" : node.weight === 5 ? "weight5" : "";
  const isInstantVisited = node.instantVisited ? "instantVisited" : "";
  const isInstantPath = node.instantPath ? "instantPath" : "";


  return (
    <div
      id={`node-${node.row}-${node.col}`}
      className={`node ${isVisited} ${isPath} ${isInstantVisited} ${isInstantPath} ${isWall} ${isWeighted}`}
      onMouseDown={(e) => onMouseDown(e, node)}
      onMouseEnter={() => onMouseEnter(node)}
      onMouseLeave={() => onMouseLeave(node)}
      onMouseUp={() => onMouseUp()}
      onContextMenu={(e) => onContextMenu(e, node)}
    >
      <strong>{node.isStart ? "S" : node.isGoal ? "G" : ""}</strong>
      

    </div>
  );
};

export default Node;

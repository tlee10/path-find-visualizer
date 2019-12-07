import '/Users/tx-10/Desktop/react/path-find-visualizer/src/App.css';
import React from 'react';

const Node = (props) => {
  
  //const {col, row, isDiscovered, isVisited, isWall}
  const {isStart, isGoal, row, col, visited} = props.node;

  const isVisited = visited ? "visited": "";

  return ( 
    <div id={`node-${row}-${col}`} className={`node ${isVisited}`}>
      <strong>{isStart ? "S": isGoal ? "G" : ""}</strong>
    </div>
  );
}
 
export default Node;


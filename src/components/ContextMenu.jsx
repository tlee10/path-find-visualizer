import React from "react";

const ContextMenu = props => {
  const {visible, contextMenuNode} = props;
  const isVisible = visible ? "visible" : "";
  const isValidNode = contextMenuNode !== null ? true : false;


  return (
    <div className={`contextMenu ${isVisible}`}>
      <p>position: {isValidNode ? contextMenuNode.row + ", " + contextMenuNode.col : ""}</p>
      <p>parent: {isValidNode ? contextMenuNode.parent !== null ? "Node(" + contextMenuNode.parent.row + ", " + contextMenuNode.parent.col + ")" : "" : ""}</p>
      <p>visited: {isValidNode ? contextMenuNode.visited ? "true" : "false" : ""}</p>
      <p>weight: {isValidNode ? contextMenuNode.weight: ""}</p>
      <p>cost: {isValidNode ? contextMenuNode.g : ""}</p>
      <p>heuristic: {isValidNode ? contextMenuNode.h : ""}</p>
    </div>
  )
}

export default ContextMenu;

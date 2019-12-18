import Node from "./Node";
import React, { Component } from "react";

class Grid extends Component {
  render() {
    const {
      grid,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseUp
    } = this.props;
    return (
      <div className="grid">
        {grid.map((row, rowId) => {
          return (
            <div className="row" key={rowId}>
              {row.map((node, nodeId) => {
                return (
                  <Node
                    node={node}
                    key={nodeId}
                    onMouseDown={onMouseDown}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Grid;

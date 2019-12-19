import Node from "./Node";
import React, { Component } from "react";

class Grid extends Component {
  render() {
    const {
      grid,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseUp,
      onContextMenu
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
                    onContextMenu={onContextMenu}
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

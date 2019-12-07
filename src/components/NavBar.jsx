import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { handleAlgoDropdown } = this.props;

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Path Searching Algorithms
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="dropdown nav-item">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Algorithms
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button
                  className="dropdown-item"
                  type="button"
                  id="startButtonDijkstra"
                  onClick={() => handleAlgoDropdown("bfs")}
                >
                  BFS
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  id="startButtonDijkstra"
                  onClick={() => handleAlgoDropdown("dfs")}
                >
                  DFS
                </button>
              </ul>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

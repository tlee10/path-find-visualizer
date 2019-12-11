import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const algorithms = ["BFS", "DFS", "Dijkstra", "A*"];
    const { algoChosen, handleAlgoDropdown, activateSearch } = this.props;
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
                {algorithms.map(algo => {
                  return (
                    <button
                      className="dropdown-item"
                      key={algo}
                      onClick={() => handleAlgoDropdown(algo)}
                    >
                      {algo}
                    </button>
                  );
                })}
              </ul>
              <button
                className="btn btn-dark"
                type="button"
                onClick={() => activateSearch()}
              >{algoChosen === "" ? "Choose an algorithm" : "Activate " + algoChosen}</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

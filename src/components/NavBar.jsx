import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const algorithms = ["BFS", "DFS", "Dijkstra", "A*"];
    const {
      algoChosen,
      handleAlgoDropdown,
      activateSearch,
      clearWalls,
      animationActivated
    } = this.props;
    const activateBtnColor = algoChosen === "" ? "btn-dark" : animationActivated ? "btn-danger" : "btn-success";
    const activateBtnText =
      algoChosen === "" ? "Choose An Algorithm" : animationActivated ? "Searching" : "Activate " + algoChosen;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Path Searching Visualizer
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
                <strong>Algorithms</strong>
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
                className={`btn ${activateBtnColor}`}
                type="button"
                onClick={() => activateSearch()}
              >
                <strong>{activateBtnText}</strong>
                
              </button>
              <button
                className={`btn btn-dark`}
                type="button"
                onClick={() => clearWalls()}
              >
                <strong>Clear Walls</strong>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

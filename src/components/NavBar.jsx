import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const algorithms = ["BFS", "DFS", "Dijkstra", "Greedy Best-First Search", "A*"];
    const {
      algoChosen,
      handleAlgoDropdown,
      handleNodeFeatureDropdown,
      activateSearch,
      clearWalls,
      clearWeight,
      animationActivated,
      addNodeFeature
    } = this.props;

    const activateBtnColor =
      algoChosen === ""
        ? "btn-dark"
        : animationActivated
        ? "btn-danger"
        : "btn-success";
    const activateBtnText =
      algoChosen === ""
        ? "Choose An Algorithm"
        : animationActivated
        ? "Searching"
        : "Activate " + algoChosen;
    const isWeightedSearch =
      algoChosen === "Dijkstra" || algoChosen === "A*" ? false : true;
    const addNodeFeatureBtnTxt = "Add " + addNodeFeature;
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
                      {algo === "Dijkstra" || algo === "A*" ? algo + "  (Weighted)" : algo}
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
            </li>
            <li className="nav-item dropdown">
              <button
                className="btn btn-dark dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <strong>{addNodeFeatureBtnTxt}</strong>
              </button>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <button
                  className="dropdown-item "
                  onClick={() => handleNodeFeatureDropdown("Wall")}
                >
                  Wall
                </button>
                <button
                  className="dropdown-item "
                  disabled={isWeightedSearch}
                  onClick={() => handleNodeFeatureDropdown("Weight 3")}
                >
                  Weight 3
                </button>
                <button
                  className="dropdown-item"
                  disabled={isWeightedSearch}
                  onClick={() => handleNodeFeatureDropdown("Weight 5")}
                >
                  Weight 5
                </button>
              </div>
            </li>
            <button
              className={`btn btn-dark`}
              type="button"
              onClick={() => clearWalls()}
            >
              <strong>Clear Walls</strong>
            </button>
            <button
              className={`btn btn-dark`}
              disabled={isWeightedSearch}
              type="button"
              onClick={() => clearWeight()}
            >
              <strong>Clear Weight</strong>
            </button>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

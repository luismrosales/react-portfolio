import React from "react";
import "./style.css";
function Project() {
  return (
    <div>
      <p className="p1">
        Click on one of my projects and see them for yourself.
      </p>
      <div className="flex-container">
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://track-it-budget.herokuapp.com/"
          >
            <img src="/images/budget.png" alt="" />
          </a>
          <p>Budget tracker</p>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://patsax.github.io/Night-Picks/"
          >
            <img src="/images/night.png" alt="" />
          </a>
          <p>Night picks</p>
        </div>
        <div>
          <a
            href="https://watch.screencastify.com/v/p6AAoAbHBj4vnpHcWSAD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/team.png" alt="" />
          </a>
          <p>Team generator</p>
        </div>
      </div>
    </div>
  );
}

export default Project;

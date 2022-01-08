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
          <img src="/images/budget.png" alt="" />
          <p>Budget tracker</p>
        </div>
        <div>
          <img src="/images/night.png" alt="" />
          <p>Night picks</p>
        </div>
        <div>
          <img src="/images/team.png" alt="" />
          <p>Team generator</p>
        </div>
      </div>
    </div>
  );
}

export default Project;

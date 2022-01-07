import React from "react";
import "./style.css";
function Nav(props) {
  console.log(props);
  return (
    <nav>
      <h1 className="logo">
        <span className="first"> Luis </span>
        <span className="last">Rosales</span>
      </h1>
      <ul className="primary-navigation">
        <li onClick={() => props.setPage(1)}>About</li>
        <li onClick={() => props.setPage(2)}>Portfolio</li>
        <li onClick={() => props.setPage(3)}>Contact</li>
        <li onClick={() => props.setPage(4)}>Resume</li>
      </ul>
    </nav>
  );
}
export default Nav;

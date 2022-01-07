import React from "react";
import Nav from "../Nav";
import "./style.css";

const Header = (props) => {
  console.log(props);
  return (
    <>
      <Nav setPage={props.setPage}></Nav>
    </>
  );
};

export default Header;

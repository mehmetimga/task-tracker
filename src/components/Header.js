import React from "react";
import Button from "./Button";
import { Location, useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd}></Button>
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

// const headingStyle = {
//   color: "blue",
// };
export default Header;

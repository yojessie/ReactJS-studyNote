import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <Link className="button" to="/">
        Home
      </Link>
      <Link className="button" to="/about">
        About
      </Link>
    </div>
  );
}

export default Navigation;

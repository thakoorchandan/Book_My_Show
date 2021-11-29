import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
  text-align: center;
  background-color: dodgerblue;
  margin-top: 0;
  height: 60px;
  padding-top: 15px;
  font-size: 25px;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "blue",
};

function Navbar() {
  return (
    <NavUnlisted>
      <Link to="/" style={linkStyle}>
        Dashboard
      </Link>
      <Link to="/movies" style={linkStyle}>
        All Movies
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/latest-shows" style={linkStyle}>
        Latest
      </Link>
    </NavUnlisted>
  );
}

export default Navbar;

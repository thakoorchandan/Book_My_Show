import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
  /* text-align: center; */
  background-color: dodgerblue;
  margin-top: 0;
  height: 60px;
  padding-top: 15px;
  font-size: 25px;
`;

const linkStyle = {
  margin: "20px",
  textDecoration: "none",
  color: "blue",
};

const Authenticate = styled.div`
  float: right;
  width: 300px;
`;

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
      <Authenticate>
        <Link to="/register" style={linkStyle}>
          Register
        </Link>
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
      </Authenticate>
    </NavUnlisted>
  );
}

export default Navbar;

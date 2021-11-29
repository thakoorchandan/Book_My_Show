import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
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

const Button = styled.button`
  font-size: 25px;
  color: blue;
  background-color: transparent;
  border: 0;
  outline: 0;
`;

const token = localStorage.getItem("token");
const username = localStorage.getItem("username");

const handleLocalStorage = () => {
  localStorage.clear();
  alert("You are logged out");
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
        {username && token ? (
          <Link to="/" style={linkStyle}>
            {username}
          </Link>
        ) : (
          <Link to="/register" style={linkStyle}>
            Register
          </Link>
        )}
        {username && token ? (
          <Link to="/" style={linkStyle}>
            <Button onClick={handleLocalStorage}>Logout</Button>
          </Link>
        ) : (
          <Link to="/login">Signin</Link>
        )}
      </Authenticate>
    </NavUnlisted>
  );
}

export default Navbar;

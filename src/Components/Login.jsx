import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const userData = {
  email: "",
  password: "",
};

const Title = styled.h1`
  text-align: center;
`;
const Items = styled.div`
  width: 300px;
  margin: auto;
`;
const Input = styled.input`
  font-size: 20px;
  border: 1px solid black;
  border-radius: 5px;
  height: 40px;
  width: 300px;
  padding-left: 10px;
`;
const Submit = styled.input`
  height: 40px;
  width: 100px;
  margin-left: 110px;
  font-size: 15px;
`;

function Login() {
  const [formData, setFormData] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await axios
        .post("https://safe-eyrie-23497.herokuapp.com/signin", formData)
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.user.first_name);
            alert("You are successfully logged in, Click Ok to Continue");
            window.location = "/";
          }
        });
    } catch (err) {
      console.log("error :", err);
      alert("Something went wrong");
    }
  };
  return (
    <div>
      <Title>Login</Title>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Items>
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="email"
          />
          <br />
          <br />
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
          />
          <br />
          <br />
          <Submit type="submit" />
        </Items>
      </form>
    </div>
  );
}

export default Login;

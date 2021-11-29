import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
const userData = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  country: "",
  address_1: "",
  address_2: "",
  zip: "",
  password: "",
};

function SignUp() {
  const [formData, setFormData] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userInfo = await axios
        .post("https://safe-eyrie-23497.herokuapp.com/signup", formData)
        .then((res) => {
          if (res.statusText === "OK") {
            alert("You are registered succesfully");
            window.location = "/signin";
          }
        });
    } catch (err) {
      console.log("error :", err);
      alert("Email already exists, Try with a new email");
    }
  };
  return (
    <div>
      <Title>SignUp</Title>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Items>
          <Input
            name="first_name"
            onChange={handleChange}
            placeholder="Firstname"
          />
          <br />
          <br />
          <Input
            name="last_name"
            onChange={handleChange}
            placeholder="Lastname"
          />
          <br />
          <br />
          <Input name="phone" onChange={handleChange} placeholder="Phone" />
          <br />
          <br />
          <Input name="email" onChange={handleChange} placeholder="Email" />
          <br />
          <br />
          <Input name="country" onChange={handleChange} placeholder="Country" />
          <br />
          <br />
          <Input
            name="address_1"
            onChange={handleChange}
            placeholder="Address 1"
          />
          <br />
          <br />
          <Input
            name="address_2"
            onChange={handleChange}
            placeholder="Address 2"
          />
          <br />
          <br />
          <Input name="zip" onChange={handleChange} placeholder="Zip" />
          <br />
          <br />
          <Input
            name="passowrd"
            type="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <br />
          <br />
          <Submit type="submit" />
        </Items>
      </form>
    </div>
  );
}

export default SignUp;

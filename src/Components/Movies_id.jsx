import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Payment from "./Payment";
import { NavLink } from "react-router-dom";

const Title = styled.h1`
  font-size: 35px;
  font-family: "Roboto", sans-serif;
`;

const Container = styled.div`
  margin: auto;
  height: 300px;
  width: 600px;
  text-align: center;
  border-radius: 5px;
`;

const Movie_Image = styled.img`
  margin-top: 20px;
  height: 400px;
  width: 330px;
`;

const Prod_details = styled.div`
  margin: auto;
  width: 400px;
  transition: 0.2s;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;

const Prod_name = styled.h3`
  font-family: "Roboto", sans-serif;
  color: red;
  font-size: 28px;
`;

const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: dodgerblue;
  color: white;
  border: 0;
  height: 40px;
  width: 150px;
  font-size: 20px;
  border-radius: 5px;
  transition: 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

function Movies_Id() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const prod = fetch(`http://localhost:3001/data/${id}`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const movie_rating = data.rating;

  // PAYMENT POPUP and CLOSE
  const handleClickOpen = (id) => {
    const result = data;
    console.log(result);
    setOpen(true);
    setData(result);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Title>Movie Details</Title>
      <Prod_name>{data.description}</Prod_name>
      <Prod_details>
        <Rating name="read-only" value={movie_rating} readOnly />
        <Movie_Image src={data.image}></Movie_Image>
        <Prod_name>{data.name}</Prod_name>
        <Button onClick={() => handleClickOpen(data.id)}>Book</Button>
      </Prod_details>
      <Link to="/movies">
        <Button>Go back</Button>
      </Link>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            ></IconButton>
            <NavLink to="/" exact={true}></NavLink>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h5" component="div">
              Book Tickets
            </Typography>

            <Button autoFocus color="inherit" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Toolbar>
        </AppBar>

        <Payment room={data} handleClose={handleClose} />
      </Dialog>
    </Container>
  );
}

export default Movies_Id;

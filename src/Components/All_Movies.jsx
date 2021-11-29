import React, { useState, useEffect } from "react";
import history from "../history";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";

const Title = styled.h1`
  text-align: center;
`;

const Prod_container = styled.div`
  margin: auto;
  height: auto;
  width: 50%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  text-align: center;
`;

const Prod_Box = styled.div`
  height: auto;
  border: 2px solid dodgerblue;
  border-radius: 5px;
`;

const Name = styled.p`
  width: 300px;
  font-size: 20px;
  color: red;
  font-family: "Roboto", sans-serif;
`;

const View = styled.button`
  background-color: dodgerblue;
  height: 30px;
  width: 120px;
  color: white;
  border: 0.5px solid black;
  margin-top: 20px;
  font-size: 17px;
  margin-bottom: 20px;
`;

function All_Movies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const list = fetch("http://localhost:3001/data")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div>
      <Title>All Movies</Title>
      <Prod_container>
        {data.map((item) => (
          <>
            {/* <Prod_Box key={item.id}>
              <Name>{item.name}</Name>
              <h4>{item.description}</h4>
              <Link to={`/movies/${item.id}`}>
                <View onClick={() => history.push(`/movies/${item.id}`)}>
                  more details
                </View>
              </Link>
            </Prod_Box> */}
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    M
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.name}
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image={item.image}
                alt="Movie"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Link to={`/movies/${item.id}`}>
                  <Button onClick={() => history.push(`/movies/${item.id}`)}>
                    more details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </>
        ))}
      </Prod_container>
    </div>
  );
}

export default All_Movies;

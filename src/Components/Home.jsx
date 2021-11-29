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
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";

const Title = styled.h1`
  text-align: center;
`;

const Prod_container = styled.div`
  margin: auto;
  height: auto;
  width: 60%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  text-align: center;
  transition: 0.2s;
`;

const CardComponent = styled.div`
  width: 100%;
  transition: 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const list = fetch("http://localhost:3001/data?_limit=3")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div>
      <Title>Top Movies</Title>
      <Prod_container>
        {data.map((item) => (
          <>
            <CardComponent>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      M
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      {/* <MoreVertIcon /> */}
                    </IconButton>
                  }
                  title={item.name}
                />
                <Rating name="read-only" value={item.rating} readOnly />
                <CardMedia
                  component="img"
                  height="194"
                  image={item.image}
                  alt="Movie"
                />
                <CardContent>
                  <Typography variant="h6" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/movies/${item.id}`}
                  >
                    <Button
                      style={{
                        margin: "auto",
                        backgroundColor: "dodgerblue",
                        color: "white",
                      }}
                      onClick={() => history.push(`/movies/${item.id}`)}
                    >
                      more details
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </CardComponent>
          </>
        ))}
      </Prod_container>
    </div>
  );
}

export default Dashboard;

import { Route, Switch } from "react-router-dom";
import "./App.css";
import All_Movies from "./Components/All_Movies";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import Movies_id from "./Components/Movies_id";
import About from "./Components/About";
import Latest from "./Components/Latest";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/register" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact={true} component={All_Movies} />
        <Route path="/about" exact={true} component={About} />
        <Route path="/latest-shows" exact={true} component={Latest} />
        <Route exact path="/movies/:id" component={Movies_id} />
      </Switch>
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
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
    <Router>
      <Navbar />
      <Switch>
        <Route path="/register" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/about" exact={true} component={About} />
        <Route path="/latest-shows" exact={true} component={Latest} />

        {localStorage.getItem("token") ? (
          <Route exact path="/" component={Home} />
        ) : (
          <Redirect to={"/login"} />
        )}

        <Route path="/" exact component={Home} />
        <Route path="/movies" exact={true} component={All_Movies} />
        <Route exact path="/movies/:id" component={Movies_id} />
      </Switch>
    </Router>
  );
}

export default App;

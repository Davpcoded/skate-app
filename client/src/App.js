import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spots from "./pages/Spots";
import ShareSpot from "./pages/ShareSpot";
import Videos from "./pages/Videos";
import News from "./pages/News";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "black" }}>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/spots">
            <Spots />
          </Route>
          <Route exact path="/shareSpot">
            <ShareSpot />
          </Route>
          <Route exact path="/videos">
            <Videos />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

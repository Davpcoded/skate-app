import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Spots from "./pages/Spots";
import ShareSpot from "./pages/ShareSpot";
import Videos from "./pages/Videos";
import News from "./pages/News";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/about">
            <About />
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

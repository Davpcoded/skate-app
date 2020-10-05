import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spots from "./pages/Spots";
import ShareSpot from "./pages/ShareSpot";
import Videos from "./pages/Videos";
import News from "./pages/News";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#4a6b3d" }}>
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;

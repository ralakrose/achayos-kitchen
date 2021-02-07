import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import "./Styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Mainmeals from "./Pages/Mainmeals";
import Info from "./Pages/Info";
import Pastries from "./Pages/Pastries";

class Home extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="Home">
            <Navbar />
            <header className="title-background">
              <h2 className="title">Achie's Kitchen</h2>
            </header>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/mainmeals" component={Mainmeals} />
              <Route path="/pastries" component={Pastries} />
              <Route path="/info" component={Info} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
export default Home;

import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PostList from "./PostList";
import UserList from "./UserList";

const App = () => (
  <BrowserRouter>
    <div>
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-brand">
          <Link className="navbar-item" to="/">View All Users</Link>
          <Link className="navbar-item" to="/about">About</Link>
        </div>
      </nav>

      <Route exact path="/" component={UserList} />
      <Route path="/about" component={About} />
      <Route path="/posts/:userId" component={PostList} />
    </div>
  </BrowserRouter>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

import "./assets/scss/_base.scss";

const App = ({ title }) => (
  <Router>
    <Layout>
      {title}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Layout>
  </Router>
);

export default App;

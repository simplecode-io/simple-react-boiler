import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

import "./assets/scss/_base.scss";

const App = () => (
  <Router>
    <Layout>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Layout>
  </Router>
);

export default App;

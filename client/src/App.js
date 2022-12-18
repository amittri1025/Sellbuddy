import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Home";
import Messages from "./Pages/Messages";
import Navbar from "./Components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import 'stream-chat-react/dist/css/v2/index.css';
import { useClient } from './hooks/useClient'

const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/messages" component={Messages}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
  } from "react-router-dom";
import './App.css';

import LandingPage from "./landingPage";
import AlgebraPage from "./algebra";
import FlervarrePage from "./flervarre";
import SannstatPage from "./sannstat";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/algebra">
          <AlgebraPage />
        </Route>
        <Route path="/flervarre">
          <FlervarrePage />
        </Route>
        <Route path="/sannstat">
          <SannstatPage />
        </Route>
        <Route exact path="/" >
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
  } from "react-router-dom";
import './App.css';

import LandingPage from "./testpages"
import AlgebraPage from "./algebra/algApp"
import FlervarrePage from "./testpages/product2"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/algebra">
          <AlgebraPage />
        </Route>
        <Route path="/newflervarre">
          <FlervarrePage />
        </Route>
        <Route exact path="/" >
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

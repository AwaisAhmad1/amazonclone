import React from 'react';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Header from './Header';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>

          <Route path="/checkout">

            <Checkout />
          </Route>
          <Route path="/">

            <Home />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;

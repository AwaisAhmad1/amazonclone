import React from 'react';
import { useEffect } from 'react';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';


function App() {

  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('this user is ........>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        //The is logged out 
      }
      else {
        dispatch({
          type: 'SET_USER ',
          user: null
        })
        //user is logged out
      }
    })
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

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

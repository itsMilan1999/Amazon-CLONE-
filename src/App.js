import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Checkout from './Checkout';
import Login from "./Login"
import { useStateValue } from './StateProvider';
import { auth } from './FireBase';



function App() {
  const [{ user }, dispatch] = useStateValue();
  //pice of code run on givenCondtion

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is loggin
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //user is logOut
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
    return () => {
      unsubscribe();
    }
  }, [])
  console.log("USER>>>>>>", user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/cheakout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* This is defulat home page */}
          <Route path="/">
            <Header />
            <Home />

          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;

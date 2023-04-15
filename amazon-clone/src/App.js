import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51Jp3DXSFzB7ioZyD1Xv3VUY2BNYJaVqyDscGu2j9MNxIrkmF42cNXNM7W22OS7hRhPGTmBC4zGJvE1IWYGQBR8sk00N6dEFZDG");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // it's like a second dynamic if statement in React
    // will only run once when the app component loads... [] when its blank!

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
    // BEM Convensition
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
            <Login/>
        </Route>
        
        <Route path="/checkout">
              <Header />
            <Checkout />
        </Route>

        <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
              <Payment />
              </Elements>
            {/* <h1>I am the payment route</h1> */}
        </Route>

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



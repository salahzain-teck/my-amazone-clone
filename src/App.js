import React, { useEffect, useState } from 'react'
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout"
import Login from "./Login"
import Payment from './Payment';
import Orders from './Orders'
import { auth } from "./firebase";
import { useStateValue } from './StateProvider'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { actionTypes } from './reducer'
import Order from './Order'




const promise = loadStripe('pk_test_51HtdANLxCxIkrlLNCwdECLXKWSSyn9CHFjz73zDwhmlVvGX4y8pQsT5DuSZN0SvfFz738gp0UoYFCMCvM0NgmPow00CXKySGKa')

function App() {
  
  const [{}, dispatch] = useStateValue();
  

  useEffect (() => {
    //will only run once when the app componenet load...

    auth.onAuthStateChanged((authUser) => {
    

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type : actionTypes.SET_USER,
          user : authUser,
        
          
        })
       
     

      }else{
        //the user is logged out
        console.log('no user')
        dispatch ({
          type : 'SET_USER',
          user : null
        })
      }
    })

  }, [])


  return (
    //BEM
    
    <Router>
      <div className="app">

        <Switch>
          <Route path="/orders">
          <Header />
          <Orders/>
          
          </Route>

        
          <Route path="/login">
          <Login/>
          </Route>
         

          <Route path="/checkout">
            <Header />
            <Checkout/>
            </Route>

          <Route path="/payment">
             <Header/>
             <Elements stripe={promise}>
             <Payment/> 
             </Elements>
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


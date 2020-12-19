import React from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import SignUp from "./components/Pages/SignUp";
import Products from "./components/Pages/Products";



function App() {
  return (
    <>
      <Router>
      <Navbar/> 
      <Switch>
      <Route exact path = "/" exact component= {Home}/>
      <Route exact path = "/services" exact component= {Services}/>
      <Route exact path = "/sign-up" exact component= {SignUp}/>
      <Route exact path = "/products" exact component= {Products}/>

      </Switch>
      </Router>
    </>
  );
}

export default App;

import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Footer, Navbar } from "./components"
import GlobalStyle from "./GlobalStyles";
import Home from "./pages/HomePage/Home";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp/SignUp";




function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
         <Switch>
           <Route exact path ="/" exact component = {Home}/>
           <Route exact path ="/products" exact component = {Products}/>
           <Route exact path ="/services" exact component = {Services}/>
           <Route exact path ="/sign-up" exact component = {SignUp}/>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;

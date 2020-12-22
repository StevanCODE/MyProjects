import './App.css';
import React from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home.jsx';
import Footer from './components/pages/Footer/Footer.jsx';
import Services from './components/pages/Services/Services.jsx';
import Products from './components/pages/Products/Products.jsx';
import SignUp from './components/pages/SignUp/SignUp.jsx';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
         <Route exact path = "/" exact component = {Home}/>
         <Route exact path = "/services" exact component = {Services}/>
         <Route exact path = "/products" exact component = {Products}/>
         <Route exact path = "/sign-up" exact component = {SignUp}/>
        </Switch>
        <Footer/>
      </Router>   
    </div>
  );
}

export default App;

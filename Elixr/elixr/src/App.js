import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import {GlobalStyle} from "./globalStyles"
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";






function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
    <Route exact path = "/" exact component = {Home}></Route>
      </Switch>
      <Footer/>
    </Router>   
  );
}

export default App;

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Page from "./components/Page/Page";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <Switch>
          <Route to = "/" exact component = {Page}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

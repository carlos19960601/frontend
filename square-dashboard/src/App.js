import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./views/main";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

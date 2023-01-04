import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/users" component={UsersPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter >

  );
}

export default App;

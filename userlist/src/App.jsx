import React from "react";
import { Switch, Route } from "react-router-dom";

import { AppHeader } from "./components/AppHeader";

import { LoginPage } from "./views/Login";
import { ErrorPage } from "./views/Error";

function App(props) {
  return (
    <div className="userlist">
      <AppHeader />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;

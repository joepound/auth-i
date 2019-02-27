import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import { UsersContext } from "./providers/UsersProvider";

import { AppHeader } from "./components/AppHeader";

import { LoginPage } from "./views/Login";
import { RegistrationPage } from "./views/Registration";
import { UserlistPage } from "./views/Userlist";
import { ErrorPage } from "./views/Error";

function App(props) {
  const { authenticate } = useContext(UsersContext);

  return (
    <div className="userlist">
      <AppHeader />
      <Switch>
        <Route
          exact
          path="/"
          render={props => (authenticate() ? <UserlistPage /> : <LoginPage />)}
        />
        <Route exact path="/register" component={RegistrationPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;

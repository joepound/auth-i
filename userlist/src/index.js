import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

import "./index.scss";

import { UsersProvider } from "./providers";
import App from "./App";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <UsersProvider>
    <Router>
      <AppWithRouter />
    </Router>
  </UsersProvider>,
  document.getElementById("root")
);

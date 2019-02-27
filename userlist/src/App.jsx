import React from "react";
import { Route } from "react-router-dom";

import { Header } from "./components/HeaderComponents";

function App(props) {
  return (
    <div className="userlist">
      <Header/>
    </div>
  );
}

export default App;

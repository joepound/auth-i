import React from "react";

function AppHeader(props) {
  return (
    <header className="userlist__app-header">
      <img
        className="userlist__app-header__app-logo"
        src="images/logo.png"
        alt="Userlist logo"
      />
      <h1 className="userlist__app-header__app-name">Userlist</h1>
    </header>
  );
}

export default AppHeader;

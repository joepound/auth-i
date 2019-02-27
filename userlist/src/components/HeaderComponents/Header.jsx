import React from "react";

function HeaderContainer(props) {
  return (
    <header className="userlist__header">
      <img
        className="userlist__header__app-logo"
        src="images/logo.png"
        alt="Userlist logo"
      />
      <h1 className="userlist__header__app-name">Userlist</h1>
    </header>
  );
}

export default HeaderContainer;

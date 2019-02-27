import React from "react";
import { Link } from "react-router-dom";

import { AccountInfoForm } from "../../components/AccountInfoForm";

function LoginPage(props) {
  return (
    <main className="userlist__login">
      <AccountInfoForm />
      <div className="userlist__login__register-link">
        Not logged in? Sign up <Link to="/register">here</Link>.
      </div>
    </main>
  );
}

export default LoginPage;

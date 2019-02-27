import React from "react";
import { Link } from "react-router-dom";

import { AccountInfoForm } from "../../components/AccountInfoForm";

function RegistrationPage(props) {
  return (
    <main className="userlist__registration">
      <AccountInfoForm />
      <div className="userlist__registration__login-link">
        <Link to="/">Back to login</Link>
      </div>
    </main>
  );
}

export default RegistrationPage;

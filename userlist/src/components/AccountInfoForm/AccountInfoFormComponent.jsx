import React, { useContext } from "react";

import { UsersContext } from "../../providers/UsersProvider";

function AccountInfoForm(props) {
  const {
    usernameInput,
    passwordInput,
    handleTextInputChange,
    login
  } = useContext(UsersContext);

  return (
    <form className="userlist__account-info-form">
      <h2 className="userlist__account-info-form__heading">Form Name</h2>
      <div className="userlist__account-info-form__field">
        <label
          className="userlist__account-info-form__field__label"
          htmlFor="UserName"
        >
          Username:{" "}
        </label>
        <input
          className="userlist__account-info-form__field__input"
          id="UserName"
          type="text"
          placeholder="Enter username"
          required
          name="setUsernameInput"
          value={usernameInput}
          onChange={handleTextInputChange}
        />
      </div>
      <div className="userlist__account-info-form__field">
        <label
          className="userlist__account-info-form__field__label"
          htmlFor="UserPassword"
        >
          Password:{" "}
        </label>
        <input
          className="userlist__account-info-form__field__input"
          id="UserPassword"
          type="password"
          placeholder="Enter password"
          required
          name="setPasswordInput"
          value={passwordInput}
          onChange={handleTextInputChange}
        />
      </div>
      <div className="userlist__account-info-form__buttons">
        <button
          className="userlist__account-info-form__buttons__submit"
          type="submit"
          onClick={login}
        >
          Submit
        </button>
        <button
          className="userlist__account-info-form__buttons__clear"
          type="reset"
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default AccountInfoForm;

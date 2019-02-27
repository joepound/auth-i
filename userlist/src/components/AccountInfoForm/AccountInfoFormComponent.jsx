import React from "react";

function AccountInfoForm(props) {
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
        />
      </div>
      <div className="userlist__account-info-form__buttons">
        <button
          className="userlist__account-info-form__buttons__submit"
          type="submit"
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

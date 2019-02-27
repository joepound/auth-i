import React, { createContext, useState } from "react";
import axios from "axios";

export const UsersContext = createContext();

function UsersProvider(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [users, setUsers] = useState(null);

  const baseURL = "http://localhost:5000/api";
  const usersContext = {
    usernameInput,
    passwordInput,

    textInputSetters: {
      setUsernameInput,
      setPasswordInput
    },

    users,

    authenticate() {
      let isAuthenticated = false;
      axios
        .get(`${baseURL}/auth`)
        .then(res => (isAuthenticated = true))
        .catch(err => {
          setUsers(null);
          console.log(err);
        });
      return isAuthenticated;
    },

    register(e) {
      e.preventDefault();

      if (!usernameInput) {
        alert("Please enter a username first.");
      } else if (!passwordInput) {
        alert("Please enter a password first.");
      } else {
        const userData = {
          UserName: usernameInput,
          UserPassword: passwordInput
        };
        axios
          .post(`${baseURL}/register`, userData)
          .then(res => alert("User registration successful."))
          .catch(err => {
            alert("An error occurred in user registration.");
            console.log(err);
          });
      }
    },

    login(e) {
      e.preventDefault();

      const userData = {
        UserName: usernameInput,
        UserPassword: passwordInput
      };
      axios
        .post(`${baseURL}/login`, userData)
        .then(res => alert("Login was successful."))
        .catch(err => {
          alert("Login failed.");
          setUsers(null);
          console.log(err);
        });
    },

    getAllUsers() {
      axios
        .get(`${baseURL}/users`)
        .then(res => setUsers(res.data))
        .catch(err => {
          setUsers(null);
          alert("You must log in to view this content.");
          console.log(err);
        });
    },

    logout() {
      axios
        .get(`${baseURL}/logout`)
        .then(res => alert("Logout was successful."))
        .catch(err => {
          alert("An error occurred in logging out.");
          console.log(err);
        })
        .finally(setUsers(null));
    },

    handleTextInputChange(e) {
      usersContext.textInputSetters[e.currentTarget.name](
        e.currentTarget.value
      );
    }
  };

  return (
    <UsersContext.Provider value={usersContext}>
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;

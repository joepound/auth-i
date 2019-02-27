import React, { createContext, useState } from "react";
import axios from "axios";

export const UsersContext = createContext();

function UsersProvider(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  // const [users, setUsers] = useState([]);
  // const [selectedUser, setSelectedUser] = useState("");
  // const [newName, setNewName] = useState("");
  // const [newBio, setNewBio] = useState("");
  // const [isInUpdateMode, setIsInUpdateMode] = useState(false);

  const baseURL = "http://localhost:5000";
  const usersContext = {
    usernameInput,
    passwordInput,

    textInputSetters: {
      setUsernameInput,
      setPasswordInput
    },

    login() {
      
    },

    logout() {},

    handleTextInputChange(e) {
      usersContext.textInputSetters[e.currentTarget.name](
        e.currentTarget.value
      );
    }
  };
  // const usersContext = {
  //   users,
  //   selectedUser,
  //   newName,
  //   newBio,
  //   isInUpdateMode,

  //   setIsInUpdateMode,

  //   textInputSetters: {
  //     setNewName,
  //     setNewBio
  //   },

  //   getUsers() {
  //     axios
  //       .get(`${baseURL}/users`)
  //       .then(res => {
  //         res.data.sort((a, b) =>
  //           a.name.toUpperCase().trim() > b.name.toUpperCase().trim() ? 1 : -1
  //         );
  //         setUsers(res.data);
  //       })
  //       .catch(err => console.log(err));
  //   },

  //   getUserById(id) {
  //     axios
  //       .get(`${baseURL}/users/${id}`)
  //       .then(res => setSelectedUser(res.data))
  //       .catch(err => console.log(err));
  //   },

  //   addUser() {
  //     if (!newName) {
  //       alert("Please enter a name first.");
  //     } else if (!newBio) {
  //       alert("Please enter a bio first.");
  //     } else if (window.confirm("Are you sure you want to add a new user?")) {
  //       const newUserObj = { name: newName, bio: newBio };
  //       axios
  //         .post(`${baseURL}/users`, newUserObj)
  //         .then(res => {
  //           alert(`User "${newName}" was successfully added.`);
  //           usersContext.getUsers();
  //           setNewName("");
  //           setNewBio("");
  //         })
  //         .catch(err => console.log(err));
  //     }
  //   },

  //   deleteUser() {
  //     if (
  //       window.confirm("Are you sure you want to deleted the selected user?")
  //     ) {
  //       axios
  //         .delete(`${baseURL}/users/${selectedUser.id}`)
  //         .then(res => {
  //           alert(`User "${selectedUser.name}" was successfully deleted.`);
  //           usersContext.getUsers();
  //           setSelectedUser("");
  //         })
  //         .catch(err => console.log(err));
  //     }
  //   },

  //   toggleUpdateMode() {
  //     const toggledUpdateMode = !isInUpdateMode;

  //     if (toggledUpdateMode) {
  //       usersContext.populateUserForm();
  //     }

  //     setIsInUpdateMode(toggledUpdateMode);
  //   },

  //   populateUserForm() {
  //     setNewName(selectedUser.name);
  //     setNewBio(selectedUser.bio);
  //   },

  //   updateUser() {
  //     if (!newName) {
  //       alert("Please enter a name first.");
  //     } else if (!newBio) {
  //       alert("Please enter a bio first.");
  //     } else if (
  //       window.confirm("Are you sure you want to update the selected user?")
  //     ) {
  //       const userUpdatesObj = { name: newName, bio: newBio };
  //       axios
  //         .put(`${baseURL}/users/${selectedUser.id}`, userUpdatesObj)
  //         .then(res => {
  //           alert(`User "${newName}" was successfully updated.`);
  //           usersContext.getUsers();
  //           setSelectedUser(res.data);
  //           setNewName("");
  //           setNewBio("");
  //           usersContext.toggleUpdateMode();
  //         })
  //         .catch(err => console.log(err));
  //     }
  //   },

  //   handleTextInputChange(e) {
  //     usersContext.textInputSetters[e.currentTarget.name](
  //       e.currentTarget.value
  //     );
  //   },

  //   handleUserSelect(e) {
  //     usersContext.getUserById(e.currentTarget.value);
  //   }
  // };

  return (
    <UsersContext.Provider value={usersContext}>
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;

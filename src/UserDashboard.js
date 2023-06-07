import React, { useEffect, useState } from "react";
import { AddUser } from "./addUserForm";
import "./styles.css";
import { BasicTable } from "./UserTable";

const UserDashboard = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("allusers") || "[]")
  );
  const [currentlyEditingEmail, setCurrentlyEditingEmail] = useState();
  const handleAddUser = (newUser) => {
    if (!currentlyEditingEmail) {
      setUsers([...users, newUser]);
    } else {
      setUsers((e) => {
        const currentUser = [...e];
        const editingIndex = currentUser.findIndex((e) => {
          return e.email == currentlyEditingEmail;
        });
        if (editingIndex >= 0) {
          currentUser[editingIndex] = newUser;
        }
        return currentUser;
      });
    }
    setCurrentlyEditingEmail(undefined);
  };

  const handleDeleteUser = (email) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers);
  };

  useEffect(() => {
    localStorage.setItem("allusers", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <h2>User Dashboard</h2>
      <AddUser
        userDetails={
          users.find((e) => {
            return e.email == currentlyEditingEmail;
          }) || {}
        }
        onSubmit={handleAddUser}
      />
      <div>
        <h3>User List</h3>
        <BasicTable
          allUsers={users}
          onDelete={(e) => {
            console.log(e);
            handleDeleteUser(e);
          }}
          onEdit={(e) => {
            console.log(
              users.find((e) => {
                return e.email == currentlyEditingEmail;
              })
            );
            setCurrentlyEditingEmail(e);
          }}
        />
      </div>
    </div>
  );
};

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform actual login and authentication logic here
    // Once the user is successfully logged in, set loggedIn to true
    setLoggedIn(true);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
      {loggedIn && <UserDashboard />}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Login />
    </div>
  );
};

export default App;

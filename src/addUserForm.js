import { useEffect, useState } from "react";

export function AddUser({ userDetails = {}, onSubmit = () => {} }) {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    type: "",
    status: ""
  });
  useEffect(() => {
    setNewUser({ ...newUser, ...userDetails });
  }, [userDetails]);
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(newUser);
        setNewUser({
          name: "",
          email: "",
          role: "",
          type: "",
          status: ""
        });
      }}
    >
      {/* {JSON.stringify(userDetails)} */}
      <h3>Add User</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newUser.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={newUser.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={newUser.role}
        onChange={handleChange}
      />
      <input
        type="text"
        name="type"
        placeholder="Type"
        value={newUser.type}
        onChange={handleChange}
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={newUser.status}
        onChange={handleChange}
      />
      <button type="submit">
        {"email" in userDetails ? "save" : "Add User"}
      </button>
    </form>
  );
}

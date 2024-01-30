import { Outlet, useParams } from "react-router-dom";
import React from "react";
import NavBar from "./Navbar";
import EditUserForm from "./EditUserForm";
import User from "./User";
import { useState } from "react";

const LiftingState = () => {
  // assume this is coming from a database
  const users = [
    { userName: "John", email: "kena1@example.com", password: "password123" },
    { userName: "Jane", email: "kena2@example.com", password: "123password" },
    { userName: "Mary", email: "kena3@example.com", password: "password321" },
  ];
  let { userId } = useParams();

  const [user, setUser] = useState(users[parseInt(userId - 1)]);
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      liftingState - {userId}
      <NavBar user={user} />
      {editMode ? (
        <EditUserForm setUser={setUser} setEditMode={setEditMode} user={user} />
      ) : (
        <User setEditMode={setEditMode} user={user} />
      )}
    </div>
  );
};

export default LiftingState;
